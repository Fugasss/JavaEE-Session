package com.plunker.backend.auth.services;

import com.plunker.backend.email.EmailSenderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccountActivationService {

    private final EmailSenderService emailSenderService;
    private final AccountRecoveryService accountRecoveryService;

    public void activateAccountByToken(String token) {
        // TODO: проверить токен, поменять флаг у пользователя (isActivated = true), удалить токен
    }

    public void sendActivationRequestEmail(String email) {
        String newActivationToken = accountRecoveryService.GenerateRecoveryTokenForEmail(email);

        String subject = "Activate Account";
        String address = "http://localhost:5173/activate?token=%s".formatted(newActivationToken);
        String message = "Open this link to recover your password: %s".formatted(address);

        emailSenderService.sendSimpleEmail(email, subject, message);
    }
}
