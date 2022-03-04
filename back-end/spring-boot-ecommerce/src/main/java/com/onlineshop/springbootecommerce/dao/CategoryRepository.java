package com.onlineshop.springbootecommerce.dao;

import com.onlineshop.springbootecommerce.entity.Category;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.rest.core.annotation.RepositoryRestResource;


// @RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
