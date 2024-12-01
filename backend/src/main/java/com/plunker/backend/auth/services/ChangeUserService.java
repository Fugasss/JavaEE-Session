package com.plunker.backend.auth.services;

import com.plunker.backend.auth.models.RecoverPasswordToken;
import com.plunker.backend.auth.models.User;
import com.plunker.backend.auth.repositories.RecoverPasswordTokenRepository;
import com.plunker.backend.auth.util.UserOldAndNewPasswordsAreSame;
import com.plunker.backend.auth.util.UserWrongPassword;
import com.plunker.backend.email.EmailSenderService;
import com.plunker.backend.util.WrongData;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.file.Path;
import java.util.Date;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ChangeUserService {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final EmailSenderService emailSenderService;
    private final AccountRecoveryService accountRecoveryService;

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


    public void updateIcon(String newIconFilename) {
        User user = userService.getCurrentUser();

        if (newIconFilename == null || newIconFilename.isEmpty()) {
            throw new WrongData();
        }

        user.setIconUrl(Path.of(user.getId() ,newIconFilename).toString());

        userService.save(user);
    }

    public void sendRecoverPasswordEmailRequest(String email) {

        if(!userService.userWithEmailExists(email)){
            throw new UsernameNotFoundException(email);
        }

        String newToken = accountRecoveryService.GenerateRecoveryTokenForEmail(email);

        String subject = "Recover Password";
        String address = "http://localhost:5173/recover?token=%s".formatted(newToken);
        String message = "Open this link to recover your password: %s".formatted(address);

        emailSenderService.sendSimpleEmail(email, subject, message);
    }

    public void updatePasswordWithToken(String token, String newPassword) {

        AccountRecoveryService.ReleasedTokenData tokenData = accountRecoveryService.ReleaseToken(token);

        User user = userService.getByEmail(tokenData.getEmail());
        user.setPassword(passwordEncoder.encode(newPassword));
        userService.save(user);
    }
}
