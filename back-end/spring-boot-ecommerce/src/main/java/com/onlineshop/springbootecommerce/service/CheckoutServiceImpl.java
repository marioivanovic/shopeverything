package com.onlineshop.springbootecommerce.service;

import java.util.Set;
import java.util.UUID;

import com.onlineshop.springbootecommerce.dao.CustomerRepository;
import com.onlineshop.springbootecommerce.dto.Purchase;
import com.onlineshop.springbootecommerce.dto.PurchaseResponse;
import com.onlineshop.springbootecommerce.entity.Customer;
import com.onlineshop.springbootecommerce.entity.Order;
import com.onlineshop.springbootecommerce.entity.OrderItem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private CustomerRepository customerRepository;
    

    @Autowired
    public CheckoutServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {
        Order order = purchase.getOrder();

        String orderTrackingNumber = geneateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item -> order.add(item));

        order.setBillingAddress(purchase.getBillingAddress());
        order.setShippingAddress(purchase.getShippingAddress());

        Customer customer = purchase.getCustomer();
        customer.add(order);
        customerRepository.save(customer);

        return new PurchaseResponse(orderTrackingNumber);
    }

    private String geneateOrderTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
