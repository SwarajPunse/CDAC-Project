package com.example.demo.controller;

import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.ArtDummy;
import com.example.demo.entities.Artist;
import com.example.demo.entities.Artwork;
import com.example.demo.entities.Artwork_Category;
import com.example.demo.services.ArtistServices;
import com.example.demo.services.ArtworkServices;
import com.example.demo.services.Artwork_categoryService;
@CrossOrigin(origins = "http://localhost:3000" )
@RestController
public class ArtworkController {

	@Autowired
	ArtworkServices atserv;
	
	@Autowired
	Artwork_categoryService acservice;
	
	@Autowired
	ArtistServices aservice;
	
	@GetMapping("/getartwork")
	public Artwork Getartwork(@RequestParam("id")  int id)
	{
		return atserv.getArtwork(id);
	}
	
	@PostMapping("/addartwork")
	public Artwork Addartwork(@RequestBody ArtDummy ad)
	{
		Artwork_Category ac =acservice.getCat(ad.getCategory());
		Artwork art =new Artwork(ad.getArt_name(),ad.getArt_description(),ad.getArt_length(),ad.getArt_breadth(),false,ac,ad.getPrice());
		return atserv.addArtwork(art);
	}
	
	@PostMapping(value="/uploadArt/{aid}", consumes="multipart/form-data")
	public boolean uploadArt(@PathVariable("aid") int aid, MultipartFile file)
	{
		boolean flag=true;
		try {
			flag = (atserv.upload(aid, file.getBytes()));
		}
		catch(Exception e){
			flag = false;
		}
		return flag;
		
		
	}
	
	@GetMapping("/deleteartwork")
	public String Deleteartwork(@RequestParam("id") int aid)
	{
		atserv.deleteArtwork(aid);
		
		return "artwork with "+aid+"deleted";
	}
	
	@GetMapping("/getallartwork")
	public List<Artwork> showAllArtwork()
	{
		List<Artwork> artworks = atserv.getallArtwork();
		artworks.forEach(artwork -> {
            // Convert the image byte array to a Base64 encoded string
            if (artwork.getArt_img() != null) {
                String base64Image = Base64.getEncoder().encodeToString(artwork.getArt_img());
                artwork.setBase64Image(base64Image);
            }
        });
		return artworks;
	}
	
	@PutMapping("/updateartprice")
	public int updateartprice(@RequestBody Artwork ar)
	{
		return atserv.updateprice(ar.getId(), ar.getPrice());
	}
	
	@GetMapping("/getartofcat")
	public List<Artwork> showArtofCat(@RequestParam("cid") int cid)
	{
		 
		Artwork_Category ac =acservice.getCat(cid);
		return atserv.getCatArt(ac);
	}
	
	@GetMapping("/getartworkofartist")
	public List<Artwork> getArtworkfromArtist(@RequestParam("id") int id)
	{
		Artist a=aservice.getartist(id);
		return atserv.getartworkfromartist(a);
	}
	
	
}
