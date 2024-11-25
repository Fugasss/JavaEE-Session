package com.plunker.backend;

import com.plunker.backend.admin.util.ProductNotExists;
import com.plunker.backend.auth.util.JwtTokenExpired;
import com.plunker.backend.auth.util.UserOldAndNewPasswordsAreSame;
import com.plunker.backend.auth.util.UserWithEmailAlreadyExists;
import com.plunker.backend.auth.util.UserWrongPassword;
import com.plunker.backend.util.MessageResponse;
import com.plunker.backend.util.WrongData;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    // BAD REQUEST
    @ExceptionHandler({WrongData.class, UserWrongPassword.class, UserOldAndNewPasswordsAreSame.class})
    @Nullable
    public ResponseEntity<MessageResponse> badRequestException(Exception e) {
        return new ResponseEntity<>(new MessageResponse(
                e.getMessage(),
                HttpStatus.BAD_REQUEST
        ), HttpStatus.BAD_REQUEST);
    }

    // CONFLICT
    @ExceptionHandler(UserWithEmailAlreadyExists.class)
    @Nullable
    public ResponseEntity<MessageResponse> conflictException(Exception e) {
        return new ResponseEntity<>(new MessageResponse(
                e.getMessage(),
                HttpStatus.CONFLICT
        ), HttpStatus.CONFLICT);
    }

    // NOT FOUND
    @ExceptionHandler({UsernameNotFoundException.class, ProductNotExists.class})
    @Nullable
    public ResponseEntity<MessageResponse> notFoundException(UsernameNotFoundException e) {
        return new ResponseEntity<>(new MessageResponse(
                e.getMessage(),
                HttpStatus.NOT_FOUND
        ), HttpStatus.NOT_FOUND);
    }

    // UNAUTHORIZED
    @ExceptionHandler({AuthenticationException.class, JwtTokenExpired.class, ExpiredJwtException.class})
    @Nullable
    public ResponseEntity<MessageResponse> unauthorizedException(Exception e) {
        return new ResponseEntity<>(new MessageResponse(
                e.getMessage(),
                HttpStatus.UNAUTHORIZED
        ), HttpStatus.UNAUTHORIZED);
    }
}
