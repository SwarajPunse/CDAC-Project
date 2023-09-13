package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Orders;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer> {

	@Query(value = "SELECT SUM(artworks.price) as total FROM orders JOIN order_items ON orders.id = order_items.order_id JOIN artworks ON order_items.artwork_id = artworks.id WHERE orders.id = :oid" , nativeQuery = true)
	public float sumsal(int oid);
}
