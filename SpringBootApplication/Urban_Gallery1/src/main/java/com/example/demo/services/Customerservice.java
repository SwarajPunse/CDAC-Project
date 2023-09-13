package com.example.demo.services;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Membership;
import com.example.demo.repositories.CustomerRepo;

@Service
public class Customerservice {
	
	@Autowired
	CustomerRepo crepo;
	
//	public Customer savecustomer( CustReg c)
//	{
//		return crepo.save(c);
//	}

	public Customer savecustomer(Customer c)
	{
		return crepo.save(c);
	}
	
	public Customer getCustomer(int id)
	{
		Optional<Customer> cust = crepo.findById(id);
		Customer m=null;
		try {
			m = cust.get();
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		 return m;
	}
	
	public int deletecust( int id)
	{
		 crepo.deleteById(id);
		 return 1;
	}
	
	public int updateCustomer(int id,String fname)
	{
		 crepo.updateCustomer(id,fname);
		 return 1;
	}

	public List<Customer> getallCustomers() {
		// TODO Auto-generated method stub
		return crepo.findAll();
	}
	public Customer getCustomerbyloginid(Login login_id)
	{
		return crepo.getcustomerbylogin(login_id);
	}

}

































//package com.example.demo.services;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.entities.CustReg;
//import com.example.demo.entities.Customer;
//import com.example.demo.entities.Membership;
//import com.example.demo.repositories.CustomerRepo;
//
//@Service
//public class Customerservice {
//	
//	@Autowired
//	CustomerRepo crepo;
//	
////	public Customer savecustomer( CustReg c)
////	{
////		return crepo.save(c);
////	}
//
//	public Customer savecustomer( Customer c)
//	{
//		return crepo.save(c);
//	}
//	
//	public Customer getCustomer(int id)
//	{
//		Optional<Customer> cust = crepo.findById(id);
//		Customer m=null;
//		try {
//			m = cust.get();
//			
//		}
//		catch(Exception e)
//		{
//			e.printStackTrace();
//		}
//		 return m;
//	}
//	
//	public int deletecust( int id)
//	{
//		 crepo.deleteById(id);
//		 return 1;
//	}
//	
//	public int updateCustomer(int id,String fname)
//	{
//		 crepo.updateCustomer(id,fname);
//		 return 1;
//	}
//
//}
