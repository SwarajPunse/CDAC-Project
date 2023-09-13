package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Roles;
@Transactional
@Repository
public interface Rolesrepository extends JpaRepository<Roles, Integer> {
	@Modifying
	@Query("update Roles set role =:a where id =:id")
	public int updateRole(int id,String a);

}
