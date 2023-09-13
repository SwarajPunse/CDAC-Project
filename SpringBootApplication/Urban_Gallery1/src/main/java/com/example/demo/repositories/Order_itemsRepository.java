package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Order_item;
@Repository
public interface Order_itemsRepository extends JpaRepository<Order_item, Integer> {

	@Query(value="select price from order_item where id= :id", nativeQuery = true)
	public float getpriceofart(int id);
	
	//@Query(value = "SELECT * FROM product WHERE price > :minPrice", nativeQuery = true)
}
