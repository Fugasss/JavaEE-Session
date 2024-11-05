package com.plunker.backend.auth.util;

public class UserWithEmailAlreadyExists extends RuntimeException {

    public UserWithEmailAlreadyExists(){
        super("Пользователь с таким Email адрессом уже существует!");
    }

    public UserWithEmailAlreadyExists(String email) {
        super("Пользователь с Email '%s' адрессом уже существует!".formatted(email));

    }
}
