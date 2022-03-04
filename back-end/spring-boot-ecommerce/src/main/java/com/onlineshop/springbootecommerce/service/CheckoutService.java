package com.onlineshop.springbootecommerce.service;

import com.onlineshop.springbootecommerce.dto.Purchase;
import com.onlineshop.springbootecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    
    PurchaseResponse placeOrder(Purchase purchase);
}
