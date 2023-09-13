package com.example.demo.entities;


import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="artwork_categories")
public class Artwork_Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column
	String cname;
	
//	//@JsonIgnoreProperties("artwork_categories")
//	@OneToMany(mappedBy="Artwork",cascade = CascadeType.ALL)
//	@JoinColumn()
//	Set<Artwork> artworks;

	public Artwork_Category() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	





	public Artwork_Category(int id, String cname, Set<Artwork> artworks) {
		super();
		this.id = id;
		this.cname = cname;
		//this.artworks = artworks;
	}

	public Artwork_Category(String cname) {
		super();
		this.cname = cname;
	}
	
	
	
	public int getId() {
		return id;
	}

	public void setId(int cid) {
		this.id = cid;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

//	public Set<Artwork> getProducts() {
//		return artworks;
//	}
//
//	public void setProducts(Set<Artwork> artworks) {
//		for(Artwork p :artworks)
//			//p.setArtwork_Category(this);
//		this.artworks = artworks;
//	}
//	
	
	
}


	

