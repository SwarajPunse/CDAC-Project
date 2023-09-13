package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Corporate;
import com.example.demo.entities.Login;
@Transactional
@Repository
public interface CorporateRepository extends JpaRepository<Corporate, Integer> {

	@Modifying
	@Query("update Corporate set firmname=:firm, email=:em, mobile_no =:mob, address=:add, gst_no=:gst where id =:id")
	public int updateCorporate(int id, String firm, String em, String mob, String add, String gst);

	@Query("select a from Corporate a where a.l= :login_id")
	public Corporate getCoCustbylogin(Login login_id);


}
