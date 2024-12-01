package com.plunker.backend.auth.services;

import com.plunker.backend.auth.models.RecoverPasswordToken;
import com.plunker.backend.auth.repositories.RecoverPasswordTokenRepository;
import com.plunker.backend.auth.util.RecoveryTokenExpired;
import com.plunker.backend.util.WrongData;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AccountRecoveryService {

    @Getter
    @Builder
    public static class ReleasedTokenData{
        private String id;
        private String email;
        private Date expirationDate;
    }

    public final int RECOVER_TOKEN_EXPIRES_IN_MINUTES = 10;

    private final RecoverPasswordTokenRepository recoverPasswordTokenRepository;

    public String GenerateRecoveryTokenForEmail(String email) {
        Date expirationDate = new Date(System.currentTimeMillis() + RECOVER_TOKEN_EXPIRES_IN_MINUTES * 60 * 1000);
        String uuid = UUID.randomUUID().toString();

        RecoverPasswordToken newToken = RecoverPasswordToken.builder()
                .email(email)
                .token(uuid)
                .expirationDate(expirationDate)
                .build();

        newToken = recoverPasswordTokenRepository.save(newToken);

        return newToken.getToken();
    }

    public ReleasedTokenData ReleaseToken(String token) {
        RecoverPasswordToken recoverToken = recoverPasswordTokenRepository.findByToken(token);

        if(IsTokenExpired(recoverToken)) {
            recoverPasswordTokenRepository.deleteByToken(token);
            throw new RecoveryTokenExpired("Recovery token expired (token will be deleted from database)");
        }

        ReleasedTokenData tokenData = ReleasedTokenData.builder()
                .id(recoverToken.getId())
                .email(recoverToken.getEmail())
                .expirationDate(recoverToken.getExpirationDate())
                .build();

        recoverPasswordTokenRepository.deleteByToken(token);

        return tokenData;
    }

    public boolean IsTokenExpired(RecoverPasswordToken token) {
        if (token == null) {
            throw new WrongData();
        }
        Date expirationDate = token.getExpirationDate();
        return expirationDate.after(new Date());
    }
}
