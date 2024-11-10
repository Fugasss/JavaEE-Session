package com.plunker.backend.basket.repositories;

import com.plunker.backend.basket.models.Product;
import com.plunker.backend.basket.models.Component;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, String> {
    List<Product> findByProductType(Component productType);
    List<Product> findByPriceBetween(int priceFrom, int priceTo);
    List<Product> findByPriceBetweenAndProductType(int priceFrom, int priceTo, Component productType);
    List<Product> findByProductTypeOrderByPriceAsc(Component productType);
    List<Product> findByPriceBetweenByPriceAsc(int priceFrom, int priceTo);
    List<Product> findByPriceBetweenAndProductTypeByPriceAsc(int priceFrom, int priceTo, Component productType);
    List<Product> findByProductTypeOrderByPriceDesc(Component productType);
    List<Product> findByPriceBetweenByPriceDesc(int priceFrom, int priceTo);
    List<Product> findByPriceBetweenAndProductTypeByPriceDesc(int priceFrom, int priceTo, Component productType);

    //@Query(value = "SELECT * FROM product WHERE product_info->>'example_stat' > :statValue", nativeQuery = true)
    //List<Product> findByExampleStatGreaterThan(@Param("statValue") String statValue);
}

