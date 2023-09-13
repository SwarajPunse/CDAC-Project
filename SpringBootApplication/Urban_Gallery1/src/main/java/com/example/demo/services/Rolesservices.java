package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Roles;
import com.example.demo.repositories.Rolesrepository;


@Service
public class Rolesservices {

	@Autowired
	Rolesrepository rrepo;
	
	public List<Roles> getall()
	{
		return rrepo.findAll();
	}
	
	public Roles addrole( Roles a)
	{
		return rrepo.save(a);
	}
	
	public void deleterole(int rid)
	{
		rrepo.deleteById(rid);
	}
	
	public int updaterole(int id,String a)
	{
		return rrepo.updateRole(id, a);
	}
	public Roles getRole(int id)
	{
	  return rrepo.findById(id).get();	
	}
	
}
