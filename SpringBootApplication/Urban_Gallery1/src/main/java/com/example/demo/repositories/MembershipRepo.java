package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Membership;

@Transactional
@Repository
public interface MembershipRepo extends JpaRepository<Membership, Integer> {
    
	@Modifying
	@Query("update Membership set duration=:a where  id=:id")
	public int updateMembership(int id,int a);

}
