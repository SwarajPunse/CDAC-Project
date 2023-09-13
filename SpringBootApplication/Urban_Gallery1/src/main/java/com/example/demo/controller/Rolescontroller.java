package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Roles;
import com.example.demo.services.Rolesservices;

@RestController
public class Rolescontroller {
	
	@Autowired
	Rolesservices rserv;
	
		@GetMapping("/getall")
		public List<Roles> getall()
		{
			return rserv.getall();
		}
		
		@PostMapping("/addentity")
		public Roles saveroles(@RequestBody Roles s)
		{
			return rserv.addrole(s);
		}
		
		@GetMapping("/deleteentity")
		public String deleteroles(@RequestParam("id") int a)
		{
			rserv.deleterole(a);
			return "deleted roles with id"+a; 
		}
		
		@PutMapping("/updaterole")
		public int updaterole(@RequestBody Roles r)
		{
			return rserv.updaterole(r.getId(), r.getRole());
		}

}
