package com.plunker.backend.auth.services;

import com.plunker.backend.auth.models.User;
import com.plunker.backend.auth.repositories.UserRepository;
import com.plunker.backend.auth.util.UserOldAndNewPasswordsAreSame;
import com.plunker.backend.auth.util.UserWrongPassword;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChangeUserService {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public void updatePassword( String oldPassword, String newPassword) throws UserOldAndNewPasswordsAreSame {
        User user = userService.getCurrentUser();

        if(!passwordEncoder.matches(oldPassword, user.getPassword())) {
            throw new UserWrongPassword();
        }

        if (oldPassword.equals(newPassword) ||
                user.getPassword().equals(passwordEncoder.encode(newPassword))) {
            throw new UserOldAndNewPasswordsAreSame();
        }

        user.setPassword(passwordEncoder.encode(newPassword));

        userService.save(user);
    }
}
