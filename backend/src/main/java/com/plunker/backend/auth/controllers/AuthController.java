package com.plunker.backend.auth.controllers;

import com.plunker.backend.auth.dto.JwtAuthenticationResponse;
import com.plunker.backend.auth.dto.LoginRequest;
import com.plunker.backend.auth.dto.RegistrationRequest;
import com.plunker.backend.auth.services.AuthenticationService;
import com.plunker.backend.auth.services.UserService;
import com.plunker.backend.auth.models.User;
import com.plunker.backend.auth.util.UserWithEmailAlreadyExists;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Tag(name = "Аутентификация")
public class    AuthController {
    private final AuthenticationService authenticationService;

    @Operation(summary = "Регистрация пользователя")
    @PostMapping("/register")
    public JwtAuthenticationResponse Register(@RequestBody @Valid RegistrationRequest request) throws UserWithEmailAlreadyExists {
        return authenticationService.register(request);
    }

    @Operation(summary = "Авторизация пользователя")
    @PostMapping("/login")
    public JwtAuthenticationResponse Register(@RequestBody @Valid LoginRequest request){
        return authenticationService.login(request);
    }
}
