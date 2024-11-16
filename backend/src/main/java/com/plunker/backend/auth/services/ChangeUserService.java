package com.plunker.backend.auth.services;

import com.plunker.backend.auth.models.RecoverPasswordToken;
import com.plunker.backend.auth.models.User;
import com.plunker.backend.auth.repositories.RecoverPasswordTokenRepository;
import com.plunker.backend.auth.util.UserOldAndNewPasswordsAreSame;
import com.plunker.backend.auth.util.UserWrongPassword;
import com.plunker.backend.email.EmailSenderService;
import com.plunker.backend.util.WrongData;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ChangeUserService {

    private final int RECOVER_TOKEN_EXPIRES_IN_MINUTES = 10;

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final EmailSenderService emailSenderService;
    private final RecoverPasswordTokenRepository recoverPasswordTokenRepository;

    public void updatePassword(String oldPassword, String newPassword) throws UserOldAndNewPasswordsAreSame {
        User user = userService.getCurrentUser();

        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
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

        if (newIconUrl == null || newIconUrl.isEmpty()) {
            throw new WrongData();
        }

        user.setIconUrl(newIconUrl);

        userService.save(user);
    }

    public void sendRecoverPasswordEmailRequest(String email) {

        RecoverPasswordToken newToken = RecoverPasswordToken.builder()
                .email(email)
                .token(UUID.randomUUID().toString())
                .expirationDate(new Date(System.currentTimeMillis() + RECOVER_TOKEN_EXPIRES_IN_MINUTES * 60 * 1000))
                .build();

        newToken = recoverPasswordTokenRepository.save(newToken);

        String subject = "Recover Password";
        String address = "http://localhost:5173/recover?token=%s".formatted(newToken.getToken());
        String message = "Open this link to recover your password: %s".formatted(address);

        emailSenderService.sendSimpleEmail(email, subject, message);
    }

    public void updatePasswordWithToken(String token, String newPassword) {
        RecoverPasswordToken recoverToken = recoverPasswordTokenRepository.findByToken(token);

        if (recoverToken == null) {
            throw new WrongData();
        }

        User user = userService.getByEmail(recoverToken.getEmail());
        user.setPassword(passwordEncoder.encode(newPassword));
        userService.save(user);
    }
}
