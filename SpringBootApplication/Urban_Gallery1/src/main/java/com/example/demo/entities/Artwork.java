package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.print.DocFlavor.BYTE_ARRAY;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="artworks")
public class Artwork {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String art_name;
	@Column
	private String art_description;
	@Column
	private byte [] art_img;
	@Column
	private float art_length;
	@Column
	private float art_breadth;
	@Column
	private boolean sold;
	
//	@JsonIgnoreProperties("id")
	@ManyToOne(cascade ={CascadeType.ALL})
	@JoinColumn(name="art_category_id")
	private Artwork_Category category;
	
	//@JsonIgnoreProperties("id")
	@ManyToOne(cascade ={CascadeType.ALL})
	@JoinColumn(name="artist_id")
	private Artist artistid;
	
	@Column
	private float price;
	
	@Transient // This annotation marks the field as non-persistent
    private String base64Image; // Add this field to store the Base64 encoded image

    // Getter and setter methods for other fields

    public String getBase64Image() {
        return base64Image;
    }

    public void setBase64Image(String base64Image) {
        this.base64Image = base64Image;
    }
	
 
    
   
	
	public Artwork(String art_name, String art_description, float art_length, float art_breadth, boolean sold,
			Artwork_Category category, Artist artistid, float price) {
		super();
		this.art_name = art_name;
		this.art_description = art_description;
		this.art_length = art_length;
		this.art_breadth = art_breadth;
		this.sold = sold;
		this.category = category;
		this.artistid = artistid;
		this.price = price;
	}

	public Artwork(String art_name, String art_description, byte[] art_img, float art_length, float art_breadth,
			boolean sold, Artwork_Category category, Artist artistid, float price) {
		super();
		this.art_name = art_name;
		this.art_description = art_description;
		this.art_img = art_img;
		this.art_length = art_length;
		this.art_breadth = art_breadth;
		this.sold = sold;
		this.category = category;
		this.artistid = artistid;
		this.price = price;
	}
	
	

	public Artwork(int id, float price) {
		super();
		this.id = id;
		this.price = price;
	}



	public Artwork() {
		super();
	}
	
	



	public Artwork(String art_name, String art_description, float art_length, float art_breadth, boolean sold,
			Artwork_Category category, float price) {
		super();
		this.art_name = art_name;
		this.art_description = art_description;
		this.art_length = art_length;
		this.art_breadth = art_breadth;
		this.sold = sold;
		this.category = category;
		this.price = price;
	}



	public Artwork(String art_name, String art_description, byte[] art_img, float art_length, float art_breadth,
			boolean sold, Artwork_Category category, float price) {
		super();
		this.art_name = art_name;
		this.art_description = art_description;
		this.art_img = art_img;
		this.art_length = art_length;
		this.art_breadth = art_breadth;
		this.sold = sold;
		this.category = category;
		this.price = price;
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
	public Artwork_Category getCategory() {
		return category;
	}
	public void setCategory(Artwork_Category category) {
		this.category = category;
	}
	public Artist getArtistid() {
		return artistid;
	}
	public void setArtistid(Artist artistid) {
		this.artistid = artistid;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}

	
	
	
	
}
