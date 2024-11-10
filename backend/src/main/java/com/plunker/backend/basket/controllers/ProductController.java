package com.plunker.backend.basket.controllers;

import com.plunker.backend.basket.models.Product;
import com.plunker.backend.basket.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("")
    public Page<Product> GetAllProducts(@RequestParam int page, @RequestParam int size) {
        return productService.getAllProducts(page, size);
    }
}
