package com.plunker.backend.userprofile.services.storages;

import com.plunker.backend.auth.services.UserService;
import jakarta.annotation.PostConstruct;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.*;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class UserImageStorageService implements StorageService {

    @NotBlank
    private final StorageProperties properties;
    private final UserService userService;
    private Path imagesPath;

    @Override
    @PostConstruct
    public void init() {
        String imagesFolderName = "images";
        imagesPath = Path.of(properties.getLocation(), imagesFolderName);

        try {
            Files.createDirectories(imagesPath);
        }
        catch (IOException e) {
            throw new StorageException("Could not initialize storage", e);
        }
    }

    @Override
    public void store(MultipartFile file) {
        try {
            if (file.isEmpty() || file.getOriginalFilename() == null || file.getOriginalFilename().isEmpty()) {
                throw new StorageException("Failed to store empty file.");
            }
            String idOfCurrentUser = userService.getCurrentUser().getId();

            try {
                Files.createDirectory(Path.of(imagesPath.toString(), idOfCurrentUser));
            }catch (FileAlreadyExistsException ignored) {
            }

            Path destination = imagesPath
                    .resolve(Path.of(idOfCurrentUser, file.getOriginalFilename()))
                    .normalize()
                    .toAbsolutePath();

            Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);

        } catch (IOException e) {
            throw new StorageException("Failed to store file.", e);
        }
    }

    @Override
    public Stream<Path> loadAll() {
        try {
            Stream<Path> files = Files
                    .walk(imagesPath, 1)
                    .filter(Files::isRegularFile)
                    .map(imagesPath::relativize);

            return files;

        } catch (IOException e) {
            throw new StorageException("Failed to read stored files", e);
        }
    }

    @Override
    public Path load(String filename) {
        return imagesPath.resolve(filename);
    }

    @Override
    public Resource loadAsResource(String filename) {
        try {
            Path file = load(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            }
            else {
                throw new StorageFileNotFoundException(
                        "Could not read file: " + filename);

            }
        }
        catch (MalformedURLException e) {
            throw new StorageFileNotFoundException("Could not read file: " + filename, e);
        }
    }

    @Override
    public void deleteAll() {
        FileSystemUtils.deleteRecursively(imagesPath.toFile());
    }
}
