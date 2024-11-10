package com.plunker.backend.admin.dto;

import com.plunker.backend.basket.models.Component;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@Data
@Tag(name = "Админка")
public class CreateProductRequest {

    @Schema(description = "Название продукта", example = "RTX 3070")
    private String productName;

    @Schema(description = "Краткое описание продукта", example = "Видеокарта 30 серии")
    private String productDescription;

    @Schema(description = "Тип продукта", example = "GPU")
    private Component productType;

    @Schema(description = "Цена продукта", example = "250000")
    private int productPrice;

    @Schema(description = "Количество продукта", example = "50")
    private int productQuantity;

}
