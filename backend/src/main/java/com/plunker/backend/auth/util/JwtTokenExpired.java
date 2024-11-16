package com.plunker.backend.auth.util;

public class JwtTokenExpired extends RuntimeException {
    public JwtTokenExpired() {
        super("Токен истёк");
    }
}
