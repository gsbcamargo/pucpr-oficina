package com.pucpr.delivery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pucpr.delivery.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	List<Product> findAllByOrderByNameAsc();

}
