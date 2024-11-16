package com.plunker.backend.auth.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class RecoverPasswordForEmailRequest {

    @Schema(description = "Почта пользователя")
    private String email;
}
