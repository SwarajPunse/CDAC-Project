package com.example.demo.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.*;
import com.example.demo.services.Customerservice;
import com.example.demo.services.EmailService;
import com.example.demo.services.LoginServices;

import com.example.demo.services.Membershipservice;
import com.example.demo.services.Rolesservices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {
	
	@Autowired
	Customerservice cservice;
	
//	@PostMapping("/savecustomer")
//	public Customer savecustomer1(Cust c)
//	{
//		c.getAddress();
//		c.getEmail();
//		c.getFname();
//		c.getLname();
//		c.getL();
//		c.getM();
//		c.getMobile_no();
//		c.isApproved();
//		return ser
//	}
	
	
//	@PostMapping("/savecustomer")
//	public Customer savecustomer1( @RequestBody CustReg c )
//	{
//		Roles r=new Roles()
//		Login l= new Login(c.getUsername(),c.getPassword(),r,0);
//		return service.savecustomer(c);
//	}
//	
	@Autowired
	Rolesservices rservice;
	
	@Autowired
	LoginServices lservice;
	
	@Autowired
	Membershipservice mservice;

        @Autowired
	EmailService emailService;
	
	@PostMapping("/registercustomer")
	public Customer regCustomer(@RequestBody CustomerReg cr )
	{
		Roles r=rservice.getRole(3);
		Membership m=mservice.getMembership(cr.getM_id());
		Login l=new Login(cr.getUsername(),cr.getPassword(),false,r,cr.getAnswer(),cr.getQuestion());
		Login saved=lservice.addLogin(l);
		
		Customer c=new Customer(cr.getFname(),cr.getLname(),cr.getEmail(),cr.getMobile_no(),cr.getAddress(),m,saved,cr.isApproved());
		Customer c1= cservice.savecustomer(c);
		
		String to = cr.getEmail();
		String subject ="Registration Confirmation!!";
		String text = "Dear Customer"+cr.getFname()+",\n\nWelcome to URBAN-GAllERY.Thankyou for registering!";
		emailService.sendRegistrationEmail(to,subject,text);
		
		
		return c1;
	}
	
	@GetMapping("/getcustomer")
	public Customer getCustomer(@RequestParam("id") int id )
	{
		return cservice.getCustomer(id);
	}
	
	@GetMapping("/deletecustomer")
	public int deletemembership(@RequestParam ("id") int id)
	{
		return cservice.deletecust(id);
	}
	
	@PutMapping("/updatecustomer")
	public int updateCustomer(@RequestBody Customer c  )
	{
		return cservice.updateCustomer(c.getId(),c.getFname());
		
	}
	@GetMapping("/getallcustomers")
	public List<Customer> getCustomers()
	{
		return cservice.getallCustomers(); 
	}
	@GetMapping("/getcustomertbyloginid")
	public Customer getcustomerbylogin(@RequestParam("login_id") int login_id)
	{
		Login l= lservice.getlogin(login_id);
		return cservice.getCustomerbyloginid(l);
	}
	

	
}





















//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.entities.*;
//import com.example.demo.entities.Customer;
//import com.example.demo.services.Customerservice;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//public class CustomerController {
//	
//	@Autowired
//	Customerservice service;
//	
////	@PostMapping("/savecustomer")
////	public Customer savecustomer1(Cust c)
////	{
////		c.getAddress();
////		c.getEmail();
////		c.getFname();
////		c.getLname();
////		c.getL();
////		c.getM();
////		c.getMobile_no();
////		c.isApproved();
////		return ser
////	}
//	
//	
////	@PostMapping("/savecustomer")
////	public Customer savecustomer1( @RequestBody CustReg c )
////	{
////		Roles r=new Roles()
////		Login l= new Login(c.getUsername(),c.getPassword(),r,0);
////		return service.savecustomer(c);
////	}
////	
//	@PostMapping("/registercustomer")
//	public Customer savecustomer1( @RequestBody Customer c )
//	{
//		
//		return service.savecustomer(c);
//	}
//	
//	@GetMapping("/getcustomer")
//	public Customer getCustomer(@RequestParam("id") int id )
//	{
//		return service.getCustomer(id);
//	}
//	
//	@GetMapping("/deletecustomer")
//	public int deletemembership(@RequestParam ("id") int id)
//	{
//		return service.deletecust(id);
//	}
//	
//	@PutMapping("/updatecustomer")
//	public int updateCustomer(@RequestBody Customer c  )
//	{
//		return service.updateCustomer(c.getId(),c.getFname());
//		
//	}
//
//	
//}
