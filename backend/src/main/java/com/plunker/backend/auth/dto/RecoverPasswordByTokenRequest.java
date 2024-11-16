package com.plunker.backend.auth.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "Запрос на восстановления пароля с использованием токена")
public class RecoverPasswordByTokenRequest {
    @Schema(description = "Этот токен приходит на почту к пользователю")
    private String recoverToken;

    @Schema(description = "Новый пароль")
    private String newPassword;
}
