package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Artist;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
@Transactional
@Repository

public interface CustomerRepo extends JpaRepository<Customer, Integer> {

	@Modifying
	@Query("update Customer set fname=:fname where id=:id")
	public int updateCustomer(int id,String fname);
	
	@Query("select a from Customer a where login_id = :l")
	public Customer getCustomer(Login l);
	
	@Query("select a from Customer a where a.login= :login_id")
	public Customer getcustomerbylogin(Login login_id);
	
}
