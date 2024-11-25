package com.plunker.backend.basket.controllers;

import com.plunker.backend.auth.services.UserService;
import com.plunker.backend.basket.models.Order;
import com.plunker.backend.basket.services.OrderService;
import com.plunker.backend.basket.services.ProductService;
import com.plunker.backend.basket.dto.OrderRequest;

import jakarta.servlet.ServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("orders/")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final UserService userService;
    private final ProductService productService;

    @GetMapping("all")
    public Page<Order> GetAllProducts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "1") int size) {
        return orderService.getAllOrdersByUserID(userService.getCurrentUser().getId(), page, size);
    }

    @PostMapping(value = "new")
    public void AddOrder(@RequestBody OrderRequest orderRequest) {
        String productID = orderRequest.getProductId();

        var order = Order.builder()
                .sold(false)
                .userId(userService.getCurrentUser().getId())
                .product(productService.getProductById(productID))
                .build();

        orderService.createOrder(order);
    }
}
