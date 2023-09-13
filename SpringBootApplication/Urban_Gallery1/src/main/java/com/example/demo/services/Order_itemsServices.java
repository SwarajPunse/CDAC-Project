package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Order_item;
import com.example.demo.repositories.Order_itemsRepository;

@Service
public class Order_itemsServices {

	@Autowired
	Order_itemsRepository oirepo;
	
	public List<Order_item> getallorder_item()
	{
		return oirepo.findAll();
	}
	
	public Order_item addorder_item(Order_item or)
	{
		return oirepo.save(or);
	}
	
	public void deleteorder_item(int ol)
	{
		oirepo.deleteById(ol);
	}
	
	public float getprice(int id)
	{
		return oirepo.getpriceofart(id);
	}
	
}
