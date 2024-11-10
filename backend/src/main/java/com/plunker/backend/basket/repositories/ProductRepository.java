package com.plunker.backend.basket.repositories;

import com.plunker.backend.basket.models.Product;
import com.plunker.backend.basket.models.Component;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
    List<Product> findByProductType(Component productType);
    List<Product> findByPriceBetween(int priceFrom, int priceTo);
    List<Product> findByPriceBetweenAndProductType(int priceFrom, int priceTo, Component productType);
}

