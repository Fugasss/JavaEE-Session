package com.plunker.backend.userprofile.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Schema(description = "Запрос на смену пароля")
public class ChangePasswordRequest {

    @Schema(description = "Старый пароль")
    @NotBlank
    private String oldPassword;

    @Schema(description = "Новый пароль", minLength = 10)
    @NotBlank
    private String newPassword;
}
