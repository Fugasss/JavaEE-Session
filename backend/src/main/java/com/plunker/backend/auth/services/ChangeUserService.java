package com.plunker.backend.auth.services;

import com.plunker.backend.auth.models.User;
import com.plunker.backend.auth.util.UserOldAndNewPasswordsAreSame;
import com.plunker.backend.auth.util.UserWrongPassword;
import com.plunker.backend.util.WrongData;
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

    public void updateIconUrl(String newIconUrl) {
        User user = userService.getCurrentUser();

        if(newIconUrl == null || newIconUrl.isEmpty()) {
            throw new WrongData();
        }

        user.setIconUrl(newIconUrl);

        userService.save(user);
    }
}
