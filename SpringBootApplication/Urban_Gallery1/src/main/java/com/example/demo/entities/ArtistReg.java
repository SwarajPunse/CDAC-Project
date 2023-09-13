package com.example.demo.entities;

public class ArtistReg {

	String username, password, question, answer, fname, lname, email, mobile_no, studio, address;
	int m_id;
	private boolean approved;
	
	

	
	

	public ArtistReg() {
		super();
	}

	public ArtistReg(String username, String password, String question, String answer, String fname, String lname,
			String email, String mobile_no, String studio, String address, int mid) {
		super();
		this.username = username;
		this.password = password;
		this.question = question;
		this.answer = answer;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.mobile_no = mobile_no;
		this.studio = studio;
		this.address = address;
		this.m_id = mid;
	}

	public ArtistReg(String username, String password, String question, String answer, String fname, String lname,
			String email, String mobile_no, String studio, String address, int mid, boolean approved) {
		super();
		this.username = username;
		this.password = password;
		this.question = question;
		this.answer = answer;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.mobile_no = mobile_no;
		this.studio = studio;
		this.address = address;
		this.m_id = mid;
		this.approved = approved;
	}

	public int getM_id() {
		return m_id;
	}

	public void setM_id(int mid) {
		this.m_id = mid;
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

	public String getStudio() {
		return studio;
	}

	public void setStudio(String studio) {
		this.studio = studio;
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
