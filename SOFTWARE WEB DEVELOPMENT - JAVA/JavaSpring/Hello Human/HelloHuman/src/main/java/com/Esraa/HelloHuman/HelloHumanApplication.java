package com.Esraa.HelloHuman;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
@SpringBootApplication
public class HelloHumanApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloHumanApplication.class, args);
	}
	
//	@RequestMapping("/")
//	 public String index(@RequestParam(value="q") String searchQuery) {
//	
//        return "Hello " + searchQuery;
//    }
	
	@RequestMapping("/")
	 public String index(@RequestParam(value="f",required=false) String fname, @RequestParam(value="l",required=false) String lname) {
		if(fname!=null) {
			if(lname!=null) {
				return "Hello " + fname+" "+lname;
			}
			return "Hello " + fname;			
		}
		return "Hello Human ";
		
   }

}
