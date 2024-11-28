package com.plunker.backend.userprofile.controllers;

import com.plunker.backend.auth.models.User;
import com.plunker.backend.auth.services.ChangeUserService;
import com.plunker.backend.auth.services.UserService;
import com.plunker.backend.userprofile.dto.ChangeIconRequest;
import com.plunker.backend.userprofile.dto.ChangePasswordRequest;
import com.plunker.backend.userprofile.dto.UserProfileDataResponse;
import com.plunker.backend.userprofile.services.storages.UserImageStorageService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/profile")
@RequiredArgsConstructor
@Tag(name = "Профиль пользователя")
public class UserProfileController {
    private final ChangeUserService changeUserService;
    private final UserService userService;

    private final UserImageStorageService userImageStorageService;

    @GetMapping("")
    public UserProfileDataResponse GetProfileData(){
        var currentUser = userService.getCurrentUser();
        var profileData = new UserProfileDataResponse();

        profileData.setEmail(currentUser.getEmail());
        profileData.setIconUrl(currentUser.getIconUrl());
        profileData.setRole(currentUser.getRole());

        return profileData;
    }

    @PutMapping("change-password")
    public void ChangePassword(@RequestBody @Valid ChangePasswordRequest changePasswordRequest) {
        changeUserService.updatePassword(
                changePasswordRequest.getOldPassword(),
                changePasswordRequest.getNewPassword()
        );
    }

    @PutMapping("change-icon")
    public void ChangeIconUrl(@RequestBody @Valid ChangeIconRequest changeIconRequest) {
        changeUserService.updateIcon(changeIconRequest.getNewIconUrl());
    }

    @PutMapping("change-icon-multipart")
    public void ChangeIconUrl(@RequestParam("file") MultipartFile newIconFile) {
        changeUserService.updateIcon(newIconFile.getOriginalFilename());
        userImageStorageService.store(newIconFile);
    }

    @GetMapping("/image")
    public ResponseEntity<StreamingResponseBody> DownloadUserImage() {
        User currentUser = userService.getCurrentUser();

        Resource imagePath = userImageStorageService.loadAsResource(currentUser.getIconUrl());
        byte[] data = null;

        try {
            data = imagePath.getContentAsByteArray();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        Optional<MediaType> mimeType = MediaTypeFactory.getMediaType(imagePath);

        if (mimeType.isEmpty()) {
            throw new RuntimeException("Image has unsupported format");
        }

        final HttpHeaders headers = new HttpHeaders();
        headers.setContentType(mimeType.get());
        headers.setContentLength(data.length);
        headers.setContentDisposition(ContentDisposition.builder("inline").filename(imagePath.getFilename()).build());
        byte[] finalData = data;
        final StreamingResponseBody body = out -> {
            out.write(finalData);
        };

        return new ResponseEntity<>(body, headers, HttpStatus.OK);
    }
}
