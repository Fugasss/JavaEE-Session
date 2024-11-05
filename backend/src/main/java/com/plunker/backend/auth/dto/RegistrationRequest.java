package com.plunker.backend.auth.dto;


import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Schema(description = "Запрос на регистрацию")
public class RegistrationRequest {

    @Schema(description = "Почта пользователя", example = "kolya@mail.ru")
    @Size(min = 5, max = 255, message = "Адресс почты может содержать от 5 до 255 символов")
    @NotBlank(message = "Почта пользователя не может быть пустым")
    @Email(message = "Email адрес должен быть в формате name@example.com")
    private String email;

    @Schema(description = "Пароль пользователя", example = "0123456789")
    @Size(min = 10, max = 30, message = "Длина пароль должна быть от 10 до 30 символов")
    @NotBlank(message = "Пароль не может быть пустым")
    private String password;
//
//    @Schema(description = "Пароль пользователя", example = "0123456789")
//    @Size(min = 10, max = 30, message = "Длина пароль должна быть от 10 до 30 символов")
//    @NotBlank(message = "Пароль не может быть пустым")
//    private String confirmPassword;
}
