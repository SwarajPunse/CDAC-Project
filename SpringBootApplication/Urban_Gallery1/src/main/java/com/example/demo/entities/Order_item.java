package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name="order_items")
public class Order_item {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@OneToOne
	@JoinColumn(name="artwork_id")
	Artwork artwork;
	
	@ManyToOne
	@JoinColumn(name="order_id")
	 Orders order;
	
//	@Column
//	float price;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Artwork getArtwork() {
		return artwork;
	}

	public void setArtwork(Artwork artwork) {
		this.artwork = artwork;
	}

	public Orders getOrder() {
		return order;
	}

	public void setOrder(Orders order) {
		this.order = order;
	}

	public Order_item(Artwork artwork, Orders order) {
		super();
		this.artwork = artwork;
		this.order = order;
	}

	public Order_item() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
}
