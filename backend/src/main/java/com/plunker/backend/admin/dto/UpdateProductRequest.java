package com.plunker.backend.admin.dto;

import com.plunker.backend.basket.models.Component;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.*;

@Data
public class UpdateProductRequest{

    @Schema(description = "ID продукта", example = "58b26bf9-5f74-4e05-996d-e47030ac72ee")
    private String productId;

    @Schema(description = "Название продукта", example = "RTX 3070", nullable = true)
    private String productName;

    @Schema(description = "Краткое описание продукта", example = "Видеокарта 30 серии", nullable = true)
    private String productDescription;

    @Schema(description = "Тип продукта", example = "GPU", nullable = true)
    private Component productType;

    @Schema(description = "Цена продукта", example = "250000", nullable = true)
    private Integer productPrice;

    @Schema(description = "Количество продукта", example = "50", nullable = true)
    private Integer productQuantity;

    @Schema(description = "Скидка на продукт", example = "0.25", nullable = true)
    @Min(value = 0)
    @Max(value = 1)
    private Float productDiscount;


}
