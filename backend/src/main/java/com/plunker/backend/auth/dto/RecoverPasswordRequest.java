package com.plunker.backend.auth.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "Запрос на смену пароля")
public class RecoverPasswordRequest {
    private String email;
}
