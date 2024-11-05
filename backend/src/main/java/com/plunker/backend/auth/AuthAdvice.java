package com.plunker.backend.auth;

import com.plunker.backend.auth.util.ExceptionResponse;
import com.plunker.backend.auth.util.UserWithEmailAlreadyExists;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Iterator;

@RestControllerAdvice
public class AuthAdvice {

    @ExceptionHandler(UserWithEmailAlreadyExists.class)
    public ResponseEntity<ExceptionResponse> handleException(UserWithEmailAlreadyExists e) {
        return new ResponseEntity<>(new ExceptionResponse(e.getMessage()), HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionResponse> handleException(MethodArgumentNotValidException e) {

        StringBuilder sb = new StringBuilder();
        BindingResult bindingResult = e.getBindingResult();

        for (ObjectError error : bindingResult.getAllErrors()) {
            sb.append(error.getDefaultMessage()).append(System.lineSeparator());
        }


        return new ResponseEntity<>(new ExceptionResponse(sb.toString()), HttpStatus.BAD_REQUEST);
    }
}
