package com.plunker.backend.basket.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "orders")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id
    @Column(name = "ORDER_ID", nullable = false)
    private String orderId;

    @Column(name = "USER_ID", nullable = false)
    private String userId;

    @Column(name = "SOLD", nullable = false)
    private boolean sold;

    @ManyToOne
    @JoinColumn(name = "PRODUCT_ID", nullable = false)
    private Product product;
}

