package com.plunker.backend.basket.services;

import com.plunker.backend.basket.models.Order;
import com.plunker.backend.basket.models.Product;
import com.plunker.backend.basket.repositories.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Page<Order> getAllOrders(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return orderRepository.findAll(pageable);
    }

    public Page<Order> getSoldOrdersByUserID(String id, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return orderRepository.findByUserIdAndSoldTrue(id, pageable);
    }

    public Page<Order> getSoldUnsoldByUserID(String id, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return orderRepository.findByUserIdAndSoldFalse(id, pageable);
    }
    
    public Page<Order> getAllOrdersByUserID(String id, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return orderRepository.findByUserId(id, pageable);
    }
}
