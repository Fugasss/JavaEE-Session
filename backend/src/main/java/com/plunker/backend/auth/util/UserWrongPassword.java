package com.plunker.backend.auth.util;

public class UserWrongPassword extends RuntimeException {
    public UserWrongPassword() {
        super("Пользователь ввёл неправильный пароль");
    }
}
