package com.example.demo.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Corporate;
import com.example.demo.entities.Login;
import com.example.demo.repositories.CorporateRepository;

@Service
public class CorporateServices {
	
	@Autowired
	CorporateRepository crepo;
	
	public List<Corporate> getallcorp()
	{
		return crepo.findAll();
	}
	
	public Corporate addCorporate( Corporate a)
	{
		return crepo.save(a);
	}
	
	public void deleteCorporate(int coid)
	{
		crepo.deleteById(coid);
	}
	
	public int updaterole(int id,String a,String em, String mob, String add, String gst)
	{
		return crepo.updateCorporate(id, a, em, mob, add, gst);
	}

	public Login getById(int id) {
		// TODO Auto-generated method stub
		return null;
	}
		
		public Corporate getcocustbyloginid(Login login_id)
		{
			return crepo.getCoCustbylogin(login_id);
		}
		public Corporate getcorp(int id)
		{
			return crepo.findById(id).get();
		}

		public Corporate getCoCustomer(int custid) {
			// TODO Auto-generated method stub
			return crepo.findById(custid).get();
		}

		
	

}
