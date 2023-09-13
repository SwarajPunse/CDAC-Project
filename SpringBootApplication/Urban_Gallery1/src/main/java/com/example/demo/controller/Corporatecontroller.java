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

import com.example.demo.entities.Coreg;
import com.example.demo.entities.Corporate;
import com.example.demo.entities.Login;
import com.example.demo.entities.Membership;
import com.example.demo.entities.Roles;
import com.example.demo.services.CorporateServices;
import com.example.demo.services.EmailService;
import com.example.demo.services.LoginServices;
import com.example.demo.services.Membershipservice;
import com.example.demo.services.Rolesservices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Corporatecontroller {

	@Autowired
	CorporateServices cserv;
	
	@Autowired
	LoginServices lserv;
	
	@Autowired
	Rolesservices rserv;
	
	@Autowired
	Membershipservice mserv;

        @Autowired
	EmailService emailService;
	
	
	
		@GetMapping("/getallcorp")
		public List<Corporate> getallCorp()
		{
			return cserv.getallcorp();
		}
		
		//@GetMapping("/getCorporatecust")
//		public Corporate getCorporate(@RequestParam("id") int id)
//		{
//			
//			Login l =cserv.getById(id);
//			return cserv.getDoctor(l);
//		}
		@PostMapping("/registercorporate")
		public Corporate addCorp(@RequestBody Coreg e)
		{
			System.out.println(e);
			Roles r= rserv.getRole(4);
					Login l1= new Login(e.getUsername(),e.getPassword(),false,r,e.getAnswer(),e.getQuestion());
					Login saved =lserv.addLogin(l1);
					
					
					Membership m =mserv.getMembership(e.getM_id());
					Corporate c= new Corporate(e.getFirmname(),e.getEmail(),e.getMobile_no(),e.getAddress(),e.getGst_no(),false , m, saved);
			 Corporate c1= cserv.addCorporate(c);
			
			 
			 String to = e.getEmail();
				String subject ="Registration Confirmation!!";
				String text = "Dear Corporate Customer"+e.getFirmname()+",\n\nWelcome to URBAN-GAllERY.Thankyou for registering!";
				emailService.sendRegistrationEmail(to,subject,text);
				
			 
			 return c1;
			
		}
		@GetMapping("/deletecorp")
		public String deleteCorp(@RequestParam("id") int id)
		{
			cserv.deleteCorporate(id);
			
			return "Corporate customer deleted "+ id;
		}
		
		@PutMapping("/updatecorp")
		public int updateCorp(@RequestBody Corporate e)
		{
			return cserv.updaterole(e.getId(), e.getFirmname(), e.getEmail(), e.getMobile_no(), e.getAddress(), e.getGst_no());
		}
		@GetMapping("/getcocustbyloginid")
		public Corporate getCocustbylogin(@RequestParam("login_id") int login_id)
		{
			Login l= lserv.getlogin(login_id);
			return cserv.getcocustbyloginid(l);
		}
		

		
		
}
