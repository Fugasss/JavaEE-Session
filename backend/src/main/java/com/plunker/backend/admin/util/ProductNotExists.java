package com.plunker.backend.admin.util;

public class ProductNotExists extends RuntimeException {
    public ProductNotExists(String productId) {
        super("Продукта с ID <%s> не существует".formatted(productId));
    }
}
