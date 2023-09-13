package com.example.demo.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Orders;
import com.example.demo.repositories.OrderRepository;


@Service
public class OrderServices {

	@Autowired
	OrderRepository orepo;
	
	public List<Orders> getallorder()
	{
		return orepo.findAll();
	}
	
	public Orders addorder(Orders or)
	{
		return orepo.save(or);
	}
	
	public void deleteorder(Orders ol)
	{
		orepo.delete(ol);
	}
	
	public Orders getorder(int o)
	{
		
		return orepo.findById(o).get();
	}
	public float getsumoforder(int id)
	{
		return orepo.sumsal(id);
	}
}
