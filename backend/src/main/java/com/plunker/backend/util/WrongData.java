package com.plunker.backend.util;

public class WrongData extends RuntimeException {
    public WrongData() {
        super("Получены некорректные данные!");
    }
}
