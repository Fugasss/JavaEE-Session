package com.plunker.backend.basket.repositories;

import com.plunker.backend.basket.models.Product;
import com.plunker.backend.basket.models.Component;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
    Page<Product> findByProductType(Component productType, Pageable pageable);
    Page<Product> findByPriceBetween(int priceFrom, int priceTo, Pageable pageable);
    Page<Product> findByPriceBetweenAndProductType(int priceFrom, int priceTo, Component productType, Pageable pageable);
    Page<Product> findByProductTypeOrderByPriceAsc(Component productType, Pageable pageable);
    Page<Product> findByPriceBetweenOrderByPriceAsc(int priceFrom, int priceTo, Pageable pageable);
    Page<Product> findByPriceBetweenAndProductTypeOrderByPriceAsc(int priceFrom, int priceTo, Component productType, Pageable pageable);
    Page<Product> findByProductTypeOrderByPriceDesc(Component productType, Pageable pageable);
    Page<Product> findByPriceBetweenOrderByPriceDesc(int priceFrom, int priceTo, Pageable pageable);
    Page<Product> findByPriceBetweenAndProductTypeOrderByPriceDesc(int priceFrom, int priceTo, Component productType, Pageable pageable);
}


