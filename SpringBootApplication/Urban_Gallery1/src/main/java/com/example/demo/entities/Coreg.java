package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Coreg {

	
	private int id;
	
	private String firmname;
	
	private String email;
	
	private String mobile_no;
	
	private String address;
	
	private String gst_no;
	
	private boolean approved;
	
	private String username;
	private String password;
	private boolean status;
	private String question;
	private String answer;
	
	private int m_id;
	public int getM_id() {
		return m_id;
	}
	public void setM_id(int m_id) {
		this.m_id = m_id;
	}
	public Coreg(int id, String firmname, String email, String mobile_no, String address, String gst_no,
			boolean approved, String username, String password, boolean status, String question, String answer) {
		super();
		this.id = id;
		this.firmname = firmname;
		this.email = email;
		this.mobile_no = mobile_no;
		this.address = address;
		this.gst_no = gst_no;
		this.approved = approved;
		this.username = username;
		this.password = password;
		this.status = status;
		this.question = question;
		this.answer = answer;
	}
	public Coreg(String firmname, String email, String mobile_no, String address, String gst_no, boolean approved,
			String username, String password, boolean status, String question, String answer) {
		super();
		this.firmname = firmname;
		this.email = email;
		this.mobile_no = mobile_no;
		this.address = address;
		this.gst_no = gst_no;
		this.approved = approved;
		this.username = username;
		this.password = password;
		this.status = status;
		this.question = question;
		this.answer = answer;
	}
	
	
	
	public Coreg() {
		super();
	}
	public Coreg(String firmname, String email, String mobile_no, String address, String gst_no, String username,
			String password, String question, String answer, int m_id) {
		super();
		this.firmname = firmname;
		this.email = email;
		this.mobile_no = mobile_no;
		this.address = address;
		this.gst_no = gst_no;
		this.username = username;
		this.password = password;
		this.question = question;
		this.answer = answer;
		this.m_id = m_id;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirmname() {
		return firmname;
	}
	public void setFirmname(String firmname) {
		this.firmname = firmname;
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
	public String getGst_no() {
		return gst_no;
	}
	public void setGst_no(String gst_no) {
		this.gst_no = gst_no;
	}
	public boolean isApproved() {
		return approved;
	}
	public void setApproved(boolean approved) {
		this.approved = approved;
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
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
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
	
	
}
