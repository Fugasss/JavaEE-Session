package com.plunker.backend.basket.repositories;

import com.plunker.backend.basket.models.Order;
import com.plunker.backend.basket.models.Product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, String>{
    Page<Order> findByUserId(String userId, Pageable pageable);
    Page<Order> findByUserIdAndSoldFalse(String userId, Pageable pageable);
    Page<Order> findByUserIdAndSoldTrue(String userId, Pageable pageable);
}