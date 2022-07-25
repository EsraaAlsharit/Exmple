package com.Esraa.NinjaGoldGame;

import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@SpringBootApplication
public class NinjaGoldGameApplication {

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
	
	@RequestMapping("/Farm")
	public String Farm(HttpSession session) {
		Random r = new Random();
		int low = 10;
		int high = 20;
		int result = r.nextInt(high-low) + low;

		Integer currentCount = (Integer) session.getAttribute("count");
		currentCount+=result;
		session.setAttribute("count", currentCount);
		return "redirect:/";
	}
	
	@RequestMapping("/Cave")
	public String Cave(HttpSession session) {
		Random r = new Random();
		int low = 5;
		int high = 10;
		int result = r.nextInt(high-low) + low;

		Integer currentCount = (Integer) session.getAttribute("count");
		currentCount+=result;
		session.setAttribute("count", currentCount);
		return "redirect:/";
	}
	
	@RequestMapping("/House")
	public String House(HttpSession session) {
		Random r = new Random();
		int low = 2;
		int high = 5;
		int result = r.nextInt(high-low) + low;

		Integer currentCount = (Integer) session.getAttribute("count");
		currentCount+=result;
		session.setAttribute("count", currentCount);
		return "redirect:/";
	}
	
	@RequestMapping("/Casion")
	public String Casion(HttpSession session) {
		Random r = new Random();
		int low = 0;
		int high = 50;
		int result = r.nextInt(high-low) + low;
		
		Integer currentCount = (Integer) session.getAttribute("count");
		if(r.nextBoolean()) {
			currentCount+=result;
		}else {
			currentCount-=result;
		}
		
		
		session.setAttribute("count", currentCount);
		return "redirect:/";
	}
}
