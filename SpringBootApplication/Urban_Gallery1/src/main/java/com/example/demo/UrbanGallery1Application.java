package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="com.example.demo.*")
@EnableAutoConfiguration
public class UrbanGallery1Application {

	public static void main(String[] args) {
		SpringApplication.run(UrbanGallery1Application.class, args);
	}

}
