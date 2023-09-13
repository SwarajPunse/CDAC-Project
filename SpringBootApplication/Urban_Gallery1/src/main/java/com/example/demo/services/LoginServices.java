package com.example.demo.services;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Login;

import com.example.demo.repositories.LoginRepository;

@Service
public class LoginServices {

	@Autowired
	LoginRepository lrepo;
	
	public List<Login> getalllogin()
	{
		return lrepo.getalllogin();
	}
	
	public List<Login> getAllCoCust()
	{
		return lrepo.getallCoCust();
	}
	
	
	
	public Login addLogin( Login l)
	{
		return lrepo.save(l);
	}
	
	public void deleteLogin(int lid)
	{
		lrepo.deleteById(lid);
	}
	
	public int updatelogin(int id,String u,String p)
	{
		return lrepo.updateLoginpassword(id, u, p);
	}
	
	public Login getlogin(String uid,String pwd)
	{
	
		Login l;
		
		Optional<Login> lo= lrepo.getLogin(uid, pwd);
		
		try {
			
			l=lo.get();
		} catch (Exception e) {
			l=null;
		}
		return l;
		
	}
	
	public List<Login> getfalse()
	{
		return lrepo.getnonaproved();
	}
	
	public List<Login> gettrue()
	{
		return lrepo.getapproved();
	}
	
	public int updatestatus(int id)
	{
		return lrepo.updateapproved(id);
	}

	public Login getlogin(int login_id) {
		
		return lrepo.findById(login_id).get();
	}
}
