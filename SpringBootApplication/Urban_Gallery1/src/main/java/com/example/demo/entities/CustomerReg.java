package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

public class CustomerReg {
	int id;
	String fname;
	String lname;
	String email;
	String mobile_no;
	String address;
	 String username;
	 String password;
	 int m_id;
	 private String question;
		private String answer;
		boolean approved;
	 
		
		
	public CustomerReg() {
			super();
		}
	public CustomerReg(int id, String fname, String lname, String email, String mobile_no, String address,
				String username, String password, int m_id, String question, String answer, boolean approved) {
			super();
			this.id = id;
			this.fname = fname;
			this.lname = lname;
			this.email = email;
			this.mobile_no = mobile_no;
			this.address = address;
			this.username = username;
			this.password = password;
			this.m_id = m_id;
			this.question = question;
			this.answer = answer;
			this.approved = approved;
		}
	public CustomerReg(String fname, String lname, String email, String mobile_no, String address, String username,
			String password, int m_id, String question, String answer) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.mobile_no = mobile_no;
		this.address = address;
		this.username = username;
		this.password = password;
		this.m_id = m_id;
		this.question = question;
		this.answer = answer;
	}
	public CustomerReg(String fname, String lname, String email, String mobile_no, String address, String username,
			String password, int m_id, String question, String answer, boolean approved) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.mobile_no = mobile_no;
		this.address = address;
		this.username = username;
		this.password = password;
		this.m_id = m_id;
		this.question = question;
		this.answer = answer;
		this.approved = approved;
	}
	public String getQuestion() {
			return question;
		}
		public void setQuestion(String question) {
			this.question = question;
		}
		public String getAnswer() {
			return answer;
		}
		public void setAnswer(String answer) {
			this.answer = answer;
		}
	public int getM_id() {
		return m_id;
	}
	public void setM_id(int m_id) {
		this.m_id = m_id;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
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
	
	public boolean isApproved() {
		return approved;
	}
	public void setApproved(boolean approved) {
		this.approved = approved;
	}
	
	
	
	

}
