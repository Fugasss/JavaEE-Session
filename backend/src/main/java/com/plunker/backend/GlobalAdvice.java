package com.plunker.backend;

import com.plunker.backend.util.MessageResponse;
import com.plunker.backend.util.WrongData;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Date;

@RestControllerAdvice
public class GlobalAdvice {

    @ExceptionHandler({WrongData.class})
    public ResponseEntity<MessageResponse> handleException(Exception e) {
        return new ResponseEntity<>(new MessageResponse(
                e.getMessage(),
                HttpStatus.BAD_REQUEST
        ), HttpStatus.BAD_REQUEST);
    }
}
