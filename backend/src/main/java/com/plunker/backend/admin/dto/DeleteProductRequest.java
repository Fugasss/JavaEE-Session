package com.plunker.backend.admin.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Data
public class DeleteProductRequest {

    @Schema(description = "ID продукта", example = "58b26bf9-5f74-4e05-996d-e47030ac72ee")
    private String productId;
}
