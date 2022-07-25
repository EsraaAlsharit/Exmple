package com.Esraa.NinjaGoldGame;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@SpringBootApplication
public class NinjaGoldGameApplication {
	
	ArrayList<Logs> logs = new ArrayList<Logs>();

	public static void main(String[] args) {
		SpringApplication.run(NinjaGoldGameApplication.class, args);
	}

	@RequestMapping("/")
	public String index(HttpSession session,Model model) {
		if (session.getAttribute("count") == null) {
			session.setAttribute("count", 0);
		} else {
			Integer currentCount = (Integer) session.getAttribute("count");
			model.addAttribute("num", currentCount);
		}
		
		return "index.jsp";
	}
	
	@RequestMapping("/Add")
	public String Farm(HttpSession session,@RequestParam(value = "form") String TypeOf) {
		
		LocalDateTime myDateObj = LocalDateTime.now();  
	    
	    DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("MMMM dd yyyy h:mm a");  
	    
	    String formattedDate = myDateObj.format(myFormatObj);  
		
		Random r = new Random();
		Integer currentCount = (Integer) session.getAttribute("count");
		String name=TypeOf;
		
		int low, high;
		int result = 0;
		
		switch(name) {
		  case "farm":
		    // code block
			   low = 10;
				 high = 20;
				 result = r.nextInt(high-low) + low;
				 currentCount+=result;
				 logs.add(new Logs("You entered a "+name+" and earned "+result+" gold. ("+formattedDate+")","text-success"));
		    break;
		  case "cave":
		    // code block
			   low = 5;
				 high = 10;
				 result = r.nextInt(high-low) + low;
				 currentCount+=result;
				 logs.add(new Logs("You entered a "+name+" and earned "+result+" gold. ("+formattedDate+")","text-success"));
		    break;
		  case "house":
			    // code block
			  low = 2;
				 high = 5;
				 result = r.nextInt(high-low) + low;
				 currentCount+=result;
				 logs.add(new Logs("You entered a "+name+" and earned "+result+" gold. ("+formattedDate+")","text-success"));
			    break;
		  case "casion":
			    // code block
			  	low = 0;
				high = 50;
				result = r.nextInt(high-low) + low;
				
				if(r.nextBoolean()) {
					currentCount+=result;
					logs.add(new Logs("You entered a "+name+" and earned "+result+" gold. ("+formattedDate+")","text-success"));
				}else {
					currentCount-=result;
					logs.add(new Logs("You entered a "+name+" and lost "+result+" gold...Ouch. ("+formattedDate+")","text-danger"));
				}
				
			    break;
			    default:
			    logs.add(new Logs("You entered a "+name+" and lost "+result+" gold...Ouch. ("+formattedDate+")","text-danger"));
		}
			
		
	
		
		session.setAttribute("logs", logs);
		session.setAttribute("count", currentCount);
		return "redirect:/";
	}
//	
//	@RequestMapping("/Cave")
//	public String Cave(HttpSession session) {
//		Random r = new Random();
//		int low = 5;
//		int high = 10;
//		int result = r.nextInt(high-low) + low;
//
//		Integer currentCount = (Integer) session.getAttribute("count");
//		currentCount+=result;
//		session.setAttribute("count", currentCount);
//		return "redirect:/";
//	}
//	
//	@RequestMapping("/House")
//	public String House(HttpSession session) {
//		Random r = new Random();
//		int low = 2;
//		int high = 5;
//		int result = r.nextInt(high-low) + low;
//
//		Integer currentCount = (Integer) session.getAttribute("count");
//		currentCount+=result;
//		session.setAttribute("count", currentCount);
//		return "redirect:/";
//	}
//	
//	@RequestMapping("/Casion")
//	public String Casion(HttpSession session) {
//		Random r = new Random();
//		int low = 0;
//		int high = 50;
//		int result = r.nextInt(high-low) + low;
//		
//		Integer currentCount = (Integer) session.getAttribute("count");
//		if(r.nextBoolean()) {
//			currentCount+=result;
//		}else {
//			currentCount-=result;
//		}
//		
//		
//		session.setAttribute("count", currentCount);
//		return "redirect:/";
//	}
}
