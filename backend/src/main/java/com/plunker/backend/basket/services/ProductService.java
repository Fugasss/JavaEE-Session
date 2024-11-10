package com.plunker.backend.basket.services;

import com.plunker.backend.basket.models.Product;
import com.plunker.backend.basket.repositories.ProductRepository;
import com.plunker.backend.basket.models.Component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return (List<Product>)productRepository.findAll(Sort.unsorted());
    }

    public List<Product> getProductsByPrice(int min, int max) {
        return productRepository.findByPriceBetween(min, max);
    }

    
    public List<Product> getProductsByPrice(int min, int max, Component type) {
        return productRepository.findByPriceBetweenAndProductType(min, max, type);
    }
}