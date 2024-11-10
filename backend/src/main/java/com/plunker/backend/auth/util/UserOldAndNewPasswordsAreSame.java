package com.plunker.backend.auth.util;

public class UserOldAndNewPasswordsAreSame extends RuntimeException {
    public UserOldAndNewPasswordsAreSame() {
        super("Новый пароль пользователя совпадает со старым!");
    }
}
