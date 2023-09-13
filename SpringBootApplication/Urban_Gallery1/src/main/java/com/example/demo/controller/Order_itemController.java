package com.example.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Order_item;
import com.example.demo.services.Order_itemsServices;

@RestController
public class Order_itemController {
	
	@Autowired
	Order_itemsServices oiservice;

	@GetMapping("/getallorderitem")
	public List<Order_item> getallorder_items()
	{
		return oiservice.getallorder_item();
	}
	
	@PostMapping("/addorderitem")
	public Order_item addorderitem(@RequestBody Order_item o)
	{
		return oiservice.addorder_item(o);
	}
	
	@GetMapping("/deleteorderitem")
	public String deleteorderitem(@RequestParam("id") int id)
	{
		oiservice.deleteorder_item(id);
		
		return "deleted order_item with id: "+id;
	}
	
	@GetMapping("/getpriceofproduct")
	public float getpriceofproduct(@RequestParam("id") int id)
	{
		return oiservice.getprice(id);
	}
}
