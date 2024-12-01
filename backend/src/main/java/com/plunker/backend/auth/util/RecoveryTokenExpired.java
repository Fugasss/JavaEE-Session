package com.plunker.backend.auth.util;

public class RecoveryTokenExpired extends RuntimeException {
    public RecoveryTokenExpired(String message) {
        super(message);
    }

    public RecoveryTokenExpired(String message, Throwable cause) {
        super(message, cause);
    }
}
