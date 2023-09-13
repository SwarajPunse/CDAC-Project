 package com.example.demo.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Artist;
import com.example.demo.entities.ArtistReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Membership;
import com.example.demo.entities.Roles;
import com.example.demo.services.ArtistServices;
import com.example.demo.services.EmailService;
import com.example.demo.services.LoginServices;
import com.example.demo.services.Membershipservice;
import com.example.demo.services.Rolesservices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ArtistController {

	@Autowired
	ArtistServices aserv;
	
	@Autowired
	LoginServices lserv;
	
	@Autowired
	Rolesservices rserv;
	
	@Autowired
	Membershipservice mserv;

        @Autowired
	EmailService emailService;
	
	
	@GetMapping("/getallartist")
	public List<Artist> getAllartist()
	{
		return aserv.getallArtist(); 
	}
	
	@GetMapping("/getartistbyname")
	public List<Artist> getArtistbyname(@RequestParam("fname") String Fname)
	{
		 return aserv.getArtistbyname(Fname);
	}
	
	@PostMapping("/registerartist")
	public Artist regArtist(@RequestBody ArtistReg ar)
	{
			Roles r = rserv.getRole(2);	
			Login l = new Login(ar.getUsername(),ar.getPassword(),false,r,ar.getAnswer(),ar.getQuestion());
			Login saved = lserv.addLogin(l);
			
			Membership m=mserv.getMembership(ar.getM_id());
			Artist a=new Artist(ar.getFname(),ar.getLname(),ar.getEmail(),ar.getMobile_no(),ar.getStudio(),ar.getAddress(),false,m,saved);
			Artist a1= aserv.addArtist(a);  
			
			
//			SimpleMailMessage mailmsg = new SimpleMailMessage();
//			mailmsg.setFrom("rwarungase25@gmail.com");
//			mailmsg.setTo(a1.getEmail());
//			mailmsg.setSubject("Registration confirmation");
//			mailmsg.setText("id:"+a1.getId()+"  Name"+a1.getFname()+" Thankyou for registering on Urban-Gallery!!! ");
//			
			
			
			String to = ar.getEmail();
			String subject ="Registration Confirmation!!";
			String text = "Dear Artist"+ar.getFname()+",\n\nWelcome to URBAN-GALLERY.Thankyou for registering!";
			emailService.sendRegistrationEmail(to,subject,text);
			
			
			return a;
	}
	
	
	
	@PostMapping("/addartist")
	public Artist addArtist(@RequestBody Artist a)
	{
		return aserv.addArtist(a);
	}
	
	@GetMapping("/deleteartist")
	public String deleteArtist(@RequestParam("id") int id)
	{
		aserv.deleteArtist(id);
		
		return "artist with "+id+" deleted";
	}
	
	@GetMapping("/getnonapartist")
	public List<Artist> getnonApproved()
	{
		return aserv.getnotapproved();
	}
	
	@GetMapping("/getartistbyloginid")
	
	public Artist getArtistbylogin(@RequestParam("login_id") int login_id)
	{
		Login l= lserv.getlogin(login_id);
		return aserv.getArtistbyloginid(l);
	}
	
	
}






















//package com.example.demo.controllers;
//
//import java.util.List;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.entities.Artist;
//import com.example.demo.services.ArtistServices;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//public class ArtistController {
//
//	@Autowired
//	ArtistServices aserv;
//	@GetMapping("/getallartist")
//	public List<Artist> getAllartist()
//	{
//		return aserv.getallArtist(); 
//	}
//	
//	@PostMapping("/registerartist")
//	public Artist addArtist(@RequestBody Artist a)
//	{
//		return aserv.addArtist(a);
//	}
//	
//	@GetMapping("/deleteartist")
//	public String deleteArtist(@RequestParam("id") int id)
//	{
//		aserv.deleteArtist(id);
//		
//		return "artist with "+id+" deleted";
//	}
//}
