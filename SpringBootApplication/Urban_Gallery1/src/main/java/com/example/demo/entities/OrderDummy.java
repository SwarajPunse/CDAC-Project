package com.example.demo.entities;


import java.sql.Date;
import java.util.List;

public class OrderDummy {

	
	int custid;
	List<OrderitemDummy> orderlist;
//	String delstatus;
//	float price;
	
	
	public int getCustid() {
		return custid;
	}
	@Override
	public String toString() {
		return "OrderDummy [custid=" + custid +  ", orderlist=" + orderlist + "]";
	}
	public void setCustid(int custid) {
		this.custid = custid;
	}
	
	public List<OrderitemDummy> getOrderlist() {
		return orderlist;
	}
	public void setOrderlist(List<OrderitemDummy> orderlist) {
		this.orderlist = orderlist;
	}
//	public String getDelstatus() {
//		return delstatus;
//	}
//	public void setDelstatus(String delstatus) {
//		this.delstatus = delstatus;
//	}
//	
//	
//	
//	public float getPrice() {
//		return price;
//	}
//	public void setPrice(float price) {
//		this.price = price;
//	}
//	public Date getOdate() {
//		return odate;
//	}
//	public void setOdate(Date odate) {
//		this.odate = odate;
//	}
//	
	
	public OrderDummy(int custid, List<OrderitemDummy> orderlist) {
		super();
		this.custid = custid;
		this.orderlist = orderlist;
//		this.price = price;
//		this.odate = odate;
	}
	
	
	
	
	
}
