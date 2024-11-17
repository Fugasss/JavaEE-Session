package com.plunker.backend.util;


import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

import java.util.Date;

@AllArgsConstructor
@Getter
public class MessageResponse {
    private final String message;
    private final HttpStatus statusCode;
    private final Date issuedAt = new Date();
}
