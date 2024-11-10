package com.plunker.backend.basket.repositories;

import com.plunker.backend.basket.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, String> {
    List<Order> findByUserId(String userId);
    List<Order> findByUserIdAndSoldFalse(String userId);
    List<Order> findByUserIdAndSoldTrue(String userId);
}