package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Artwork_Category;
import com.example.demo.services.Artwork_categoryService;

@CrossOrigin(origins = "http://localhost:3000" )

@RestController
public class Artwork_categoryController {
	
	@Autowired
	Artwork_categoryService aservice;
	
	@GetMapping("/getallcat")
	public List<Artwork_Category> getall()
	{
		return aservice.getall();
	}
	
	@GetMapping("/getonecat")
	public  Artwork_Category getCat(@RequestParam("cid") int catid)
	{
		return aservice.getcat(catid);
	}
	
	

}
