package com.plunker.backend.basket.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "products")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @Column(name = "PRODUCT_ID", nullable = false)
    private String productId;

    @Column(name = "PRODUCT_NAME", nullable = false)
    private String productName;

    @Enumerated(EnumType.STRING)
    @Column(name = "PRODUCT_TYPE", nullable = false)
    private Component productType;

    @Column(name = "PRODUCT_INFO", nullable = false)
    private String productInfo; 

    @Column(name = "PRICE", nullable = false)
    private int price;

    @Column(name = "DISCOUNT", nullable = false)
    private float discount;

    @Column(name = "STOCK", nullable = false)
    private int stock;

    //@PrePersist
    public void checkDiscount() {
        if (discount < 0 || discount > 1) {
            throw new IllegalArgumentException("Discount must be between 0 and 1");
        }
    }

    //@PrePersist
    public void checkStock() {
        if (stock < 0) {
            throw new IllegalArgumentException("Stock cannot be negative");
        }
    }
}

