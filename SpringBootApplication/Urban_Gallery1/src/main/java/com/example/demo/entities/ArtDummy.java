package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class ArtDummy {
	
	private int id;
	
	private String art_name;
	
	private String art_description;
	
	private byte [] art_img;
	
	private float art_length;
	
	private float art_breadth;
	
	private boolean sold;
	

	private int art_category_id;
	

	private int artist_id;
	
	private float price;

	public ArtDummy(String art_name, String art_description, float art_length, float art_breadth, boolean sold,
			int category, int artistid, float price) {
		super();
		this.art_name = art_name;
		this.art_description = art_description;
		this.art_length = art_length;
		this.art_breadth = art_breadth;
		this.sold = sold;
		this.art_category_id= category;
		this.artist_id = artistid;
		this.price = price;
	}

	public ArtDummy(String art_name, String art_description, byte[] art_img, float art_length, float art_breadth,
			boolean sold, int category, int artistid, float price) {
		super();
		this.art_name = art_name;
		this.art_description = art_description;
		this.art_img = art_img;
		this.art_length = art_length;
		this.art_breadth = art_breadth;
		this.sold = sold;
		this.art_category_id = category;
		this.artist_id = artistid;
		this.price = price;
	}

	public ArtDummy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getArt_name() {
		return art_name;
	}

	public void setArt_name(String art_name) {
		this.art_name = art_name;
	}

	public String getArt_description() {
		return art_description;
	}

	public void setArt_description(String art_description) {
		this.art_description = art_description;
	}

	public byte[] getArt_img() {
		return art_img;
	}

	public void setArt_img(byte[] art_img) {
		this.art_img = art_img;
	}

	public float getArt_length() {
		return art_length;
	}

	public void setArt_length(float art_length) {
		this.art_length = art_length;
	}

	public float getArt_breadth() {
		return art_breadth;
	}

	public void setArt_breadth(float art_breadth) {
		this.art_breadth = art_breadth;
	}

	public boolean isSold() {
		return sold;
	}

	public void setSold(boolean sold) {
		this.sold = sold;
	}

	public int getCategory() {
		return art_category_id;
	}

	public void setCategory(int category) {
		this.art_category_id = category;
	}

	public int getArtistid() {
		return artist_id;
	}

	public void setArtistid(int artistid) {
		this.artist_id = artistid;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}
	
	
	
}
