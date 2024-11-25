package com.plunker.backend.basket.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.validator.constraints.UUID;

@Data
public class OrderRequest {

    @NotBlank
    @UUID
    private String productId;
}
