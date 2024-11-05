package com.plunker.backend.auth;

import com.plunker.backend.auth.util.UserWithEmailAlreadyExists;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AuthAdvice {

    @ExceptionHandler(UserWithEmailAlreadyExists.class)
    public ResponseEntity<String> handleException(UserWithEmailAlreadyExists e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
    }
}
