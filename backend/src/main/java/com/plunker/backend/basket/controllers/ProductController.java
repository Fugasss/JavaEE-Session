package com.plunker.backend.basket.controllers;

import com.plunker.backend.basket.models.Product;
import com.plunker.backend.basket.services.ProductService;
import com.plunker.backend.basket.models.Component;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("/all")
    public Page<Product> GetAllProducts(@RequestParam int page, @RequestParam int size) {
        return productService.getAllProducts(page, size);
    }

    @GetMapping("")
    public Page<Product> GetProducts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "1") int size,
            @RequestParam(defaultValue = "0") int min,
            @RequestParam(defaultValue = "-1") int max,
            @RequestParam(defaultValue = "default") String type,
            @RequestParam(defaultValue = "default") String tag
    ) {
        if(max == -1){
            max = Integer.MAX_VALUE;
        }

        Component component = null;
        boolean defaultType;

        boolean hasTag = !tag.equals("default");

        try {
            component = Component.valueOf(type);
            defaultType = false;

        } catch (IllegalArgumentException e) {
            defaultType = true;
        }


        if (defaultType) {
            if(hasTag){
                return productService.getProductsByProductNameContainingIgnoreCaseAndPriceBetweenOrderByPriceAsc(tag, min, max, page, size);
            }else{
                return productService.getProductsByPriceRangeAsc(min, max, page, size);
            }

        } else {
            if(hasTag){
                return productService.getProductsByProductNameContainingIgnoreCaseAndProductTypeAndPriceBetweenOrderByPriceAsc(tag, component, min, max, page, size);
            }else{
                return productService.getProductsByPriceAndTypeAsc(min, max, component, page, size);
            }
        }
    }

}
