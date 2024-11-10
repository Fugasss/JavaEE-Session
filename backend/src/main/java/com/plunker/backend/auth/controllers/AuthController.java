package com.plunker.backend.auth.controllers;

import com.plunker.backend.auth.dto.JwtAuthenticationResponse;
import com.plunker.backend.auth.dto.LoginRequest;
import com.plunker.backend.auth.dto.RegistrationRequest;
import com.plunker.backend.auth.services.AuthenticationService;
import com.plunker.backend.auth.util.UserWithEmailAlreadyExists;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Tag(name = "Аутентификация")
public class AuthController {
    private final AuthenticationService authenticationService;

    @Operation(summary = "Регистрация пользователя")
    @PostMapping("/register")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Новый пользователь зарегистрирован"),
            @ApiResponse(responseCode = "400", description = "Отправлены некорректные данные", content = @Content(examples = {@ExampleObject("{\n\"message:\":\"Wrong credentials\"\n}")})),
            @ApiResponse(responseCode = "409", description = "Пользователь с таким email уже существует", content = @Content),
    })
    @ResponseStatus(HttpStatus.CREATED)
    public JwtAuthenticationResponse Register(@RequestBody @Valid RegistrationRequest request) throws UserWithEmailAlreadyExists {
        return authenticationService.register(request);
    }

    @Operation(summary = "Авторизация пользователя")
    @PostMapping("/login")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Пользователь успешно авторизован"),
            @ApiResponse(responseCode = "400", description = "Пользователь не авторизован", content = @Content(examples = {@ExampleObject("{\n\"message:\":\"Bad credentials\"\n}")})),
    })
    @ResponseStatus(HttpStatus.OK)
    public JwtAuthenticationResponse Login(@RequestBody @Valid LoginRequest request) {
        return authenticationService.login(request);
    }


}
