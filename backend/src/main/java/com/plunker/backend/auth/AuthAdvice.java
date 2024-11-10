package com.plunker.backend.auth;

import com.plunker.backend.auth.util.MessageResponse;
import com.plunker.backend.auth.util.UserWithEmailAlreadyExists;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AuthAdvice {

    @ExceptionHandler(UserWithEmailAlreadyExists.class)
    public ResponseEntity<MessageResponse> handleException(UserWithEmailAlreadyExists e) {
        return new ResponseEntity<>(new MessageResponse(e.getMessage()), HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<MessageResponse> handleException(MethodArgumentNotValidException e) {
        StringBuilder sb = new StringBuilder();
        BindingResult bindingResult = e.getBindingResult();

        for (ObjectError error : bindingResult.getAllErrors()) {
            sb.append(error.getDefaultMessage()).append(System.lineSeparator());
        }

        return new ResponseEntity<>(new MessageResponse(sb.toString()), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<MessageResponse> handleException(AuthenticationException e) {
        return new ResponseEntity<>(new MessageResponse(e.getMessage()), HttpStatus.UNAUTHORIZED);
    }
}
