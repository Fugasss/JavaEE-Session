package com.plunker.backend.basket.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
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
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "PRODUCT_ID", nullable = false)
    private String productId;

    @Column(name = "PRODUCT_NAME", nullable = false)
    @NotEmpty
    private String productName;

    @Enumerated(EnumType.STRING)
    @Column(name = "PRODUCT_TYPE", nullable = false)
    private Component productType;

    @Column(name = "PRODUCT_INFO", nullable = false)
    private String productInfo;

    @Column(name = "PRICE", nullable = false)
    @Min(0)
    private int price;

    @Column(name = "DISCOUNT", nullable = false)
    @Min(0)
    @Max(1)
    private float discount;

    @Column(name = "STOCK", nullable = false)
    @Min(0)
    private int stock;
}