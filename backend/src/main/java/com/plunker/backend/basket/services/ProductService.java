package com.plunker.backend.basket.services;

import com.plunker.backend.basket.models.Product;
import com.plunker.backend.basket.repositories.ProductRepository;
import com.plunker.backend.basket.models.Component;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    /** Пагинация всех продуктов */
    public Page<Product> getAllProducts(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findAll(pageable);
    }

    /** Пагинация продуктов по цене */
    public Page<Product> getProductsByPrice(int min, int max, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findByPriceBetween(min, max, pageable);
    }

    /** Пагинация продуктов по цене и типу */
    public Page<Product> getProductsByPrice(int min, int max, Component type, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findByPriceBetweenAndProductType(min, max, type, pageable);
    }

    /** Пагинация продуктов с сортировкой по цене по возрастанию */
    public Page<Product> getProductsByPriceAsc(int page, int size, Component type) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findByProductTypeOrderByPriceAsc(type, pageable);
    }

    /** Пагинация продуктов с сортировкой по цене по убыванию */
    public Page<Product> getProductsByPriceDesc(int page, int size, Component type) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findByProductTypeOrderByPriceDesc(type, pageable);
    }

    /** Пагинация продуктов по цене с сортировкой по цене по возрастанию и типу */
    public Page<Product> getProductsByPriceAndTypeAsc(int min, int max, Component type, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findByPriceBetweenAndProductTypeOrderByPriceAsc(min, max, type, pageable);
    }

    /** Пагинация продуктов по цене с сортировкой по цене по убыванию и типу */
    public Page<Product> getProductsByPriceAndTypeDesc(int min, int max, Component type, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findByPriceBetweenAndProductTypeOrderByPriceDesc(min, max, type, pageable);
    }

    /** Получить все продукты типа Component */
    public Page<Product> getProductsByType(Component type, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findByProductType(type, pageable);
    }

    /** Найти продукты по диапазону цены и сортировать по возрастанию */
    public Page<Product> getProductsByPriceRangeAsc(int min, int max, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findByPriceBetweenOrderByPriceAsc(min, max, pageable);
    }

    /** Найти продукты по диапазону цены и сортировать по убыванию */
    public Page<Product> getProductsByPriceRangeDesc(int min, int max, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findByPriceBetweenOrderByPriceDesc(min, max, pageable);
    }

    /** Получить продукты с сортировкой по типу и цене (по возрастанию) */
    public Page<Product> getProductsSortedByTypeAndPriceAsc(Component type, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findByProductTypeOrderByPriceAsc(type, pageable);
    }

    /** Получить продукты с сортировкой по типу и цене (по убыванию) */
    public Page<Product> getProductsSortedByTypeAndPriceDesc(Component type, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findByProductTypeOrderByPriceDesc(type, pageable);
    }

    public Page<Product> findAllByProductNameContainingIgnoreCaseAndPriceBetweenOrderByPriceAsc(String tag, int min, int max , int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findAllByProductNameContainingIgnoreCaseAndPriceBetweenOrderByPriceAsc(tag, min, max, pageable);
    }

    public Page<Product> getProductsByProductNameContainingIgnoreCaseAndProductTypeAndPriceBetweenOrderByPriceAsc(String tag,Component type, int min, int max , int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findAllByProductNameContainingIgnoreCaseAndProductTypeAndPriceBetweenOrderByPriceAsc(tag, type, min, max, pageable);
    }

    /** Добавить продукт */
    public boolean createProduct(Product product) {
        try {
            productRepository.save(product);
        } catch (Exception e) {
            return false;
        }

        return true;
    }

    /** Удалить продукт */
    public boolean removeProductById(String productId) {
        try {
            productRepository.deleteById(productId);
        } catch (Exception e) {
            return false;
        }

        return true;
    }

    /** Обновить продукт */
    public boolean updateProduct(Product product) {
        try {
            productRepository.save(product);
        } catch (Exception e) {
            return false;
        }

        return true;
    }

    public Product getProductById(String id) {
        return productRepository.findById(id).orElse(null);
    }

    // Найти продукты по стату (если этот метод будет актуален)
    //@Query(value = "SELECT * FROM product WHERE product_info->>'example_stat' > :statValue", nativeQuery = true)
    //public Page<Product> getProductsByExampleStatGreaterThan(String statValue, Pageable pageable) {
    //    return productRepository.findByExampleStatGreaterThan(statValue, pageable);
    //}

    // Дополнительные методы репозитория можно добавить по аналогии.
}
