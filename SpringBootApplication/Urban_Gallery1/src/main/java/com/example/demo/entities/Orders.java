package com.example.demo.entities;

import java.sql.Date;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.persistence.*;

@Entity
@Table(name="orders")
public class Orders {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	

	@ManyToOne
	@JoinColumn(name="cust_id")
	Customer customer;
	
	@ManyToOne
	@JoinColumn(name="corporate_id")
	Corporate corporate;
	
//	@Column
//	float price;
//	
	

	@Column
	LocalDateTime date = LocalDateTime.now();


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public Customer getCustomer() {
		return customer;
	}


	public void setCustomer(Customer customer) {
		this.customer = customer;
	}


	public Corporate getCorporate() {
		return corporate;
	}


	public void setCorporate(Corporate corporate) {
		this.corporate = corporate;
	}


//	public float getPrice() {
//		return price;
//	}
//
//
//	public void setPrice(float price) {
//		this.price = price;
//	}



	

	public Orders(Customer customer) {
		super();
		this.customer = customer;
	}


	public Orders() {
		super();
	}


	public LocalDateTime getDate() {
		return date;
	}


	public void setDate(LocalDateTime date) {
		this.date = date;
	}


	public Orders(Corporate corporate, LocalDateTime date) {
	super();
	this.corporate = corporate;
	this.date = date;
}


	public Orders(Customer customer, LocalDateTime date) {
	super();
	this.customer = customer;
	this.date = date;
}


	public Orders(Corporate corporate) {
		super();
		this.corporate = corporate;
	}
	
	
	
	

	
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public Customer getCustomer() {
//		return customer;
//	}
//
//	public void setCustomer(Customer customer) {
//		this.customer = customer;
//	}
//
//	public Corporate getCorporate() {
//		return corporate;
//	}
//
//	public void setCorporate(Corporate corporate) {
//		this.corporate = corporate;
//	}
//
//	public float getPrice() {
//		return price;
//	}
//
//	public void setPrice(float price) {
//		this.price = price;
//	}
//
//	public Date getDate() {
//		return date;
//	}
//
//	public void setDate(Date date) {
//		this.date = date;
//	}
//
//	public Order(Customer customer, float price, Date date) {
//		super();
//		this.customer = customer;
//		this.price = price;
//		this.date = date;
//	}
//
//	public Order(Corporate corporate, float price, Date date) {
//		super();
//		this.corporate = corporate;
//		this.price = price;
//		this.date = date;
//	}
//	
	
	
	

}
