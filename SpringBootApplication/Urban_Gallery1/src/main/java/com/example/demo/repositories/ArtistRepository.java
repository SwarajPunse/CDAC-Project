package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Artist;
import com.example.demo.entities.Artwork_Category;
import com.example.demo.entities.Login;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Integer> {
	@Query("select a from Artist a where login_id = :l")
	public Artist getArtist(Login l);


	@Query(value = "select * from artists where approved=false;" , nativeQuery = true)
	public List<Artist> getnonaproved();
	@Query("select a  from Artist a   where a.fname= :fname and a.lname = :lname")
	public Artist getartistbyfullname(String fname,String lname);
	
	@Query("select a  from Artist a   where a.fname= :fname ")
	public List<Artist> getartistbyname(String fname);
	
	@Query("select a from Artist a where a.lo= :login_id")
	public Artist getartistbylogin(Login login_id);
}
