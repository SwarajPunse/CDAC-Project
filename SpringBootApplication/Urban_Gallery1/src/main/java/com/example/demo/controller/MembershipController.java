package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Membership;
import com.example.demo.services.Membershipservice;

@RestController
public class MembershipController {

	@Autowired
	Membershipservice service;
	
	@GetMapping("/getMemberships")
	public Membership getMembership1(@RequestParam("id") int id)
	{
		return service.getMembership(id);
	}
	
	@PostMapping("/saveMembership")
	public Membership saveMembership(@RequestBody Membership m) 
	{
		return service.saveMembership(m);
		
	}
	
	@GetMapping("/deleteMembership")
	public String deleteMembership(@RequestParam("id") int id) 
	{
		return service.deleteMembership(id);
		
	}
	
	@PutMapping("/updateMembership")
	public int updateMembership(@RequestBody Membership m)
	{
		return service.updatemembership(m.getId(),m.getDuration());
	}
	
}
