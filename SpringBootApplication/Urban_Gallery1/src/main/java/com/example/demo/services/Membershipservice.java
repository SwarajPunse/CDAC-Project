package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Membership;
import com.example.demo.entities.Roles;
import com.example.demo.repositories.MembershipRepo;

@Service
public class Membershipservice {

	@Autowired
	MembershipRepo mrepo;
	
	public Membership getMembership(int a)
	{
		Optional<Membership> omem = mrepo.findById(a);
		Membership m=null;
		try {
			m = omem.get();
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		 return m;
	}
	
	
	public Membership saveMembership(Membership m)
	{
		return mrepo.save(m);
	}
	
	public String deleteMembership(int id)
	{
		 mrepo.deleteById(id);
		 return "Deleted"+id+".";
	}
	
	public int updatemembership(int id,int a)
	{
		return mrepo.updateMembership(id, a);
	}

}
