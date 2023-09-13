package com.example.demo.entities;

import javax.persistence.Column;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity
@Table(name="customers")
public class Customer {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)

	int id;
	@Column
	String fname;
	@Column
	String lname;
	@Column
	String email;
	@Column
	String mobile_no;
	@Column
	String address;
	
	
	
//	@JsonIgnoreProperties("memberships")
	@ManyToOne
	@JoinColumn(name="m_id")
	 Membership membership;
	
//	@JsonIgnoreProperties("login")
	@OneToOne
	@JoinColumn(name="login_id")
	Login login;
	
	@Column
	boolean approved;
	
	public Customer()
	{
		
	}
	
	public Customer(int id, String fname, String lname, String email, String mobile_no, String address,
			boolean approved, int m_id) {
		super();
		this.id = id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.mobile_no = mobile_no;
		this.address = address;
		this.approved = approved;
		this.membership=new Membership(m_id);
	}
	
	
	
	public Customer( String fname, String lname, String email, String mobile_no, String address,
			boolean approved) {
		super();
		
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.mobile_no = mobile_no;
		this.address = address;
		this.approved = approved;
	}
	
	public Customer( String fname, String lname, String email, String mobile_no, String address,
			boolean approved,int m_id,int login_id) {
		super();
		
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.mobile_no = mobile_no;
		this.address = address;
		this.approved = approved;
		this.membership=new Membership(m_id);
		this.login=new Login(login_id);
	}
	
	
	

	public Customer(String fname, String lname, String email, String mobile_no, String address, Membership membership,
			Login login, boolean approved) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.mobile_no = mobile_no;
		this.address = address;
		this.membership = membership;
		this.login = login;
		this.approved = approved;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Membership getMembership() {
		return membership;
	}

	public void setMembership(Membership membership) {
		this.membership = membership;
	}

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}

	public boolean isApproved() {
		return approved;
	}

	public void setApproved(boolean approved) {
		this.approved = approved;
	}
	

	

}
