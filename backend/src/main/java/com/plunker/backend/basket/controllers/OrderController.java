package com.plunker.backend.basket.controllers;

import com.plunker.backend.auth.services.UserService;
import com.plunker.backend.basket.models.Order;
import com.plunker.backend.basket.models.Product;
import com.plunker.backend.basket.services.OrderService;
import com.plunker.backend.basket.services.ProductService;
import com.plunker.backend.basket.dto.OrderRequest;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final UserService userService;
    private final ProductService productService;

    @GetMapping("/all")
    public Page<Order> GetAllProducts(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "1") int size) {
        return orderService.getAllOrdersByUserID(userService.getCurrentUser().getId(), page, size);
    }

    @PostMapping("/new")
    public void AddOrder(@RequestBody OrderRequest orderRequest) {
        String productID = orderRequest.getProductId();

        System.out.println("\n\n\n\n\n\n\n\n\n\n");

        try{
            var order = Order.builder()
            .sold(false)
            .userId(userService.getCurrentUser().getId())
            .product(productService.getProductById(productID))
            .build();

            System.out.println(order);

        orderService.createOrder(order);
        }catch(Exception e){
        
            System.out.println(e.getMessage());
            System.out.println(productID);
            System.out.println("\n\n\n\n\n\n\n\n\n\n");

        }
        
    }
}
