package com.plunker.backend.basket.services;

import com.plunker.backend.basket.models.Order;
import com.plunker.backend.basket.repositories.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
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

    public List<Order> getAllOrders() {
        return (List<Order>)orderRepository.findAll(Sort.unsorted());
    }

    public List<Order> getSoldOrdersByUserID(String id) {
        return orderRepository.findByUserIdAndSoldTrue(id);
    }

    public List<Order> getSoldUnsoldByUserID(String id) {
        return orderRepository.findByUserIdAndSoldFalse(id);
    }
    
    public List<Order> getAllOrdersByUserID(String id) {
        return orderRepository.findByUserId(id);
    }
}
