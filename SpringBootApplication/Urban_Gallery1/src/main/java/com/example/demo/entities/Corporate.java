package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;



@Entity
@Table(name="corporate_customers")
public class Corporate {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String firmname;
	@Column
	private String email;
	@Column
	private String mobile_no;
	@Column
	private String address;
	@Column
	private String gst_no;
	@Column
	private boolean approved;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="m_id")
	private Membership m;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="login_id")
	private Login l ;
	
	public Corporate()
	{
		
	}

	public Corporate(int id, String firmname, String email, String mobile_no, String address, String gst_no,
			boolean approved, Membership m, Login l) {
		super();
		this.id = id;
		this.firmname = firmname;
		this.email = email;
		this.mobile_no = mobile_no;
		this.address = address;
		this.gst_no = gst_no;
		this.approved = approved;
		this.m = m;
		this.l = l;
	}

	public Corporate(String firmname, String email, String mobile_no, String address, String gst_no,
			boolean approved, Membership m, Login l) {
		super();
		this.firmname = firmname;
		this.email = email;
		this.mobile_no = mobile_no;
		this.address = address;
		this.gst_no = gst_no;
		this.approved = approved;
		this.m = m;
		this.l = l;
	}
	

	public Corporate(int id, String firmname, String email, String mobile_no, String address, String gst_no,
			boolean approved) {
		super();
		this.id = id;
		this.firmname = firmname;
		this.email = email;
		this.mobile_no = mobile_no;
		this.address = address;
		this.gst_no = gst_no;
		this.approved = approved;
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

	public Membership getM() {
		return m;
	}

	public void setM(Membership m) {
		this.m = m;
	}

	public Login getL() {
		return l;
	}

	public void setL(Login l) {
		this.l = l;
	}
	
	
	
	

}
