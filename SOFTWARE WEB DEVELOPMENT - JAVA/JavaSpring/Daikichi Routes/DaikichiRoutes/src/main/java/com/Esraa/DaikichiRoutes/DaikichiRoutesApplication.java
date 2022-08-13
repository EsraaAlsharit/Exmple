package com.Esraa.DaikichiRoutes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//1. Annotation
	@RestController
@SpringBootApplication
public class DaikichiRoutesApplication {

	public static void main(String[] args) {
		SpringApplication.run(DaikichiRoutesApplication.class, args);
	}
	
	    @RequestMapping("/daikichi")
	    public String DaikichiController(){
	      return "Welcome!";
	    }
	    @RequestMapping("/daikichi/today")
	    public String Today(){
	      return "Today you will find luck in all your endeavors!";
	    }
	    
	    @RequestMapping("/daikichi/tomorrow")
	    public String Tomorrow(){
	      return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	    }
	    
	    

}
