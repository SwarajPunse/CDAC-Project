package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Artwork;
import com.example.demo.entities.Corporate;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Orders;
import com.example.demo.entities.OrderDummy;
import com.example.demo.entities.Order_item;
import com.example.demo.entities.OrderitemDummy;
import com.example.demo.services.ArtworkServices;
import com.example.demo.services.CorporateServices;
import com.example.demo.services.Customerservice;
import com.example.demo.services.OrderServices;
import com.example.demo.services.Order_itemsServices;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class OrderController {

	@Autowired
	OrderServices oservice;
	
	@Autowired
	Customerservice cservice;
	
	@Autowired
	CorporateServices coservice;
	
	@Autowired
	Order_itemsServices oiservice;
	
	@Autowired
	ArtworkServices aservice;
	
	@GetMapping("/getallorder")
	public List<Orders> getallorder()
	{
		return oservice.getallorder();
	}
	
	@GetMapping("/getorder")
	public Orders getorder(@RequestParam int id)
	{
		return oservice.getorder(id);
	}
	
	@PostMapping("/addordercust")
	public Orders addorder(@RequestBody OrderDummy od)
	{
		System.out.println(od);
		Customer c= cservice.getCustomer(od.getCustid());
		//Order o=new Order(c,od.getPrice(),od.getOdate());
		Orders o=new Orders(c);
		List<Order_item> list= new ArrayList<>();
		
		for(OrderitemDummy oid  : od.getOrderlist())
		{
			Artwork ar= aservice.getArtwork(oid.getArtwork());
			Order_item ot=new Order_item();
			//setter
			ot.setArtwork(ar);
			list.add(ot);
		}
		
		Orders saved = oservice.addorder(o);
		for(Order_item oi : list)
		{
			oi.setOrder(saved);
			oiservice.addorder_item(oi);
		}
		return saved;
	}
	
	@GetMapping("/getorderprice")
	public float ordersum(@RequestParam("oid") int id)
	{
		return oservice.getsumoforder(id);
	}
	
	@PostMapping("/addordercocust")
	public Orders addorderCo(@RequestBody OrderDummy od)
	{
		Corporate c= coservice.getCoCustomer(od.getCustid());
		//Order o=new Order(c,od.getPrice(),od.getOdate());
		Orders o=new Orders(c);
		List<Order_item> list= new ArrayList<>();
		
		for(OrderitemDummy oid  : od.getOrderlist())
		{
			Artwork ar= aservice.getArtwork(oid.getArtwork());
			Order_item ot=new Order_item();
			//setter
			ot.setArtwork(ar);
			list.add(ot);
		}
		
		Orders saved = oservice.addorder(o);
		for(Order_item oi : list)
		{
			oi.setOrder(saved);
			oiservice.addorder_item(oi);
		}
		return saved;
	}
}
