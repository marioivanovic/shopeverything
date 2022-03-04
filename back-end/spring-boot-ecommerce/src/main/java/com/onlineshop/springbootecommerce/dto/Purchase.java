package com.onlineshop.springbootecommerce.dto;

import java.util.Set;

import com.onlineshop.springbootecommerce.entity.Address;
import com.onlineshop.springbootecommerce.entity.Customer;
import com.onlineshop.springbootecommerce.entity.Order;
import com.onlineshop.springbootecommerce.entity.OrderItem;

import lombok.Data;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
