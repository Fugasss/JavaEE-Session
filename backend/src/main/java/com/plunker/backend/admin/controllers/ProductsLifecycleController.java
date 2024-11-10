package com.plunker.backend.admin.controllers;


import com.plunker.backend.admin.dto.CreateProductRequest;
import com.plunker.backend.admin.dto.DeleteProductRequest;
import com.plunker.backend.admin.dto.UpdateProductRequest;
import com.plunker.backend.admin.util.ProductNotExists;
import com.plunker.backend.basket.models.Product;
import com.plunker.backend.basket.services.ProductService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("admin/product")
@RequiredArgsConstructor
@Tag(name = "Админка", description = "Продукты")
public class ProductsLifecycleController {

    private final ProductService productService;

    @PostMapping("")
    public void CreateProduct(@RequestBody @Valid CreateProductRequest productData) {

        Product product = Product.builder()
                .productName(productData.getProductName())
                .productInfo(productData.getProductDescription())
                .productType(productData.getProductType())
                .price(productData.getProductPrice())
                .stock(productData.getProductQuantity())
                .build();

        productService.createProduct(product);
    }

    @PutMapping("")
    public void UpdateProduct(@RequestBody @Valid UpdateProductRequest productData) {

        Product existingProduct = productService.getProductById(productData.getProductId());

        if (existingProduct == null) {
            throw new ProductNotExists(productData.getProductId());
        }

        if (productData.getProductName() != null) {
            existingProduct.setProductName(productData.getProductName());
        }

        if (productData.getProductDescription() != null) {
            existingProduct.setProductInfo(productData.getProductDescription());
        }

        if (productData.getProductType() != null) {
            existingProduct.setProductType(productData.getProductType());
        }

        if (productData.getProductQuantity() != null) {
            existingProduct.setStock(productData.getProductQuantity());
        }

        if (productData.getProductPrice() != null) {
            existingProduct.setPrice(productData.getProductPrice());
        }

        if (productData.getProductDiscount() != null) {
            existingProduct.setDiscount(productData.getProductDiscount());
        }

        productService.updateProduct(existingProduct);
    }

    @DeleteMapping("")
    public void DeleteProduct(@RequestBody @Valid DeleteProductRequest productData) {
        productService.removeProductById(productData.getProductId());
    }
}
