package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Artwork;
import com.example.demo.entities.Artwork_Category;

@Transactional
@Repository
public interface Artwork_CategoryRepository extends JpaRepository <Artwork_Category, Integer>{
	
	@Query("select a from Artwork_Category a where a.id = :acid and a.cname = :cname")
	public Optional<Artwork_Category> getCategory(String acid,String cname);

	
	@Modifying
	@Query("update Artwork set price= :f where id= :id")
	public int updateprise(int id,float f);
	
	@Query("select a from Artwork a where a.category= :c")
	public List<Artwork> getallartofcat(Artwork_Category c);
}