package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Artist;
import com.example.demo.entities.Login;
import com.example.demo.repositories.ArtistRepository;

@Service
public class ArtistServices {
	
	@Autowired
	ArtistRepository arepo;
	
	public List<Artist> getallArtist()
	{
		return arepo.findAll();
	}
	
	public Artist addArtist( Artist a)
	{
		return arepo.save(a);
	}
	
	public void deleteArtist(int coid)	
	{
		arepo.deleteById(coid);
	}
	
//	public Artist getArtist(Login l)
//	{
//		return arepo.getArtist(l);
//	}
////	
//	public int updaterole(int id,String a,String em, String mob, String add, String gst)
//	{
//		return crepo.updateCorporate(id, a, em, mob, add, gst);
//	}
	
	public List<Artist> getnotapproved()
	{
		return arepo.getnonaproved();
	}

	public Artist getArtistbyloginid(Login login_id) {
		// TODO Auto-generated method stub
		return arepo.getArtist(login_id);
	}
	public Artist getArtistbyfullname(String fname,String lname)
	{
		return arepo.getartistbyfullname(fname, lname);
	}
	
	
	public List<Artist> getArtistbyname(String fname)
	{
		return arepo.getartistbyname(fname);
	}
	
	public Artist getArtistbyloginid1(Login login_id)
	{
		return arepo.getartistbylogin(login_id);
	}
	
	public Artist getartist(int id)
	{
		return arepo.findById(id).get();
	}

}
