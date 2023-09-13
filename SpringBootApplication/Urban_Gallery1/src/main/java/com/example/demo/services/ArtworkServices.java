package com.example.demo.services;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Artist;
import com.example.demo.entities.Artwork;
import com.example.demo.entities.Artwork_Category;
//import com.example.demo.entities.Membership;
import com.example.demo.repositories.ArtworkRepository;
import com.example.demo.repositories.Artwork_CategoryRepository;

@Service
public class ArtworkServices {

	@Autowired
	ArtworkRepository atrepo;
	
	Artwork_CategoryRepository acrepo;
	
	public Artwork getArtwork(int id)
	{
		Optional<Artwork> oart = atrepo.findById(id);
		Artwork a =null;
		try {
			a = oart.get();
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		 return a;
	}
	
	public Artwork addArtwork(Artwork at)
	{
		return atrepo.save(at);
	}
	
	public void deleteArtwork(int aid)
	{
		atrepo.deleteById(aid);
	}
	
	public List<Artwork> getallArtwork()
	{
		return atrepo.findAll();
	}
	
	public int updateprice(int id,float f)
	{
		return atrepo.updateprise(id, f);
	}
	public boolean upload(int id, byte[] photo)
	{
		if(atrepo.uploadphoto(id, photo)==1)
		return true;
		else
			return false;
	}
	public List<Artwork> getCatArt(Artwork_Category ac)
	{
	    
		return atrepo.getallartofcat(ac);
	}
	
	public List<Artwork> getartworkfromartist(Artist a)
	{
		return atrepo.getartistartwork(a);
	}
}
