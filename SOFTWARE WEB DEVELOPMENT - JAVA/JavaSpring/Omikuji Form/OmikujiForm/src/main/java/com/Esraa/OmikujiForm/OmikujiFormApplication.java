package com.Esraa.OmikujiForm;

import javax.servlet.http.HttpSession;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@SpringBootApplication
public class OmikujiFormApplication {

	public static void main(String[] args) {
		SpringApplication.run(OmikujiFormApplication.class, args);
	}

	@RequestMapping("/omikuji")
	public String index() {	
		return "index.jsp";
	}
	
	@RequestMapping("/omikuji/show")
	public String Show() {	
		return "show.jsp";
	}
	
	@RequestMapping("/send")
	public String send(HttpSession session,@RequestParam(value = "year") String year,
			@RequestParam(value = "city") String city,
			@RequestParam(value = "name") String name,
			@RequestParam(value = "job") String job,
			@RequestParam(value = "thing") String thing,
			@RequestParam(value = "something") String something) {
		
		 		session.setAttribute("year", year);
				 session.setAttribute("city", city);
				 session.setAttribute("name", name);
				 session.setAttribute("job", job);
				 session.setAttribute("thing", thing);
				 session.setAttribute("something", something);
		return "redirect:/omikuji/show";
	}
	
	
	

}
