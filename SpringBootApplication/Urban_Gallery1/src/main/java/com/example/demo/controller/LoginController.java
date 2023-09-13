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
import com.example.demo.entities.Login;
import com.example.demo.services.LoginServices;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class LoginController {
	
	@Autowired
	LoginServices lserv;
	
	@GetMapping("/getalllog")
	public List<Login> getallLogin()
	{
		return lserv.getalllogin();
	}
	
	@GetMapping("/getalllogCoCust")
	public List<Login> getallCoCust()
	{
		return lserv.getAllCoCust();
	}
	
	@PostMapping("/addlogin")
	public Login addlogin(@RequestBody Login l)
	{
		return lserv.addLogin(l);
	}
	@GetMapping("/deletelogin")
	public String deleteLogin(@RequestParam("id") int id)
	{
		lserv.deleteLogin(id);
		
		return "Login id "+ id+" deleted ";
	}
	
	@PutMapping("/updatelogin")
	public int updatelogininfo(@RequestBody Login l)
	{
		return lserv.updatelogin(l.getId(),l.getUsername(),l.getPassword());
	}
	
	@PostMapping("/checklogin")
	public Login getLog(@RequestBody Login l)
	{
		return lserv.getlogin(l.getUsername(),l.getPassword());
	}
	
	@GetMapping("/getnonapproved")
	public List<Login> getnonapproved()
	{
		return lserv.getfalse();
	}
	
	@GetMapping("/getapproved")
	public List<Login> getapproved()
	{
		return lserv.gettrue();
	}
	
	@GetMapping("/updateapprove")
	public int updatestat(@RequestParam("id") int id)
	{
		return lserv.updatestatus( id);
	}
	
	
}
