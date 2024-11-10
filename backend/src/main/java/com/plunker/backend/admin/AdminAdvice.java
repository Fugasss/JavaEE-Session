package com.plunker.backend.admin;

import com.plunker.backend.admin.util.ProductNotExists;
import com.plunker.backend.util.MessageResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AdminAdvice {

    @ExceptionHandler(ProductNotExists.class)
    public ResponseEntity<MessageResponse> ProductDoesntExist(ProductNotExists exception) {
        return new ResponseEntity<>(new MessageResponse(exception.getMessage()), HttpStatus.NOT_FOUND);
    }
}
