package com.example.demo.services;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Artwork_Category;
import com.example.demo.repositories.Artwork_CategoryRepository;




@Service
public class Artwork_categoryService
{
	 @Autowired
	 Artwork_CategoryRepository  acrepo;
	
	
	public List<Artwork_Category> getall()
	{
		return acrepo.findAll();
	}
	
	public Artwork_Category getCat(int cid )
	{
		Optional<Artwork_Category> ac= acrepo.findById(cid);
		Artwork_Category a= null;
		try {
			a=ac.get();
			
		}
		catch(Exception e )
		{
			e.printStackTrace();
		}
		return a;
	}
	
	public Artwork_Category saveCat(Artwork_Category cat )
	{
		return acrepo.save(cat);
	}

	public Artwork_Category getcat(int catid) {
		// TODO Auto-generated method stub
		return null;
	}

	
	
	

}
