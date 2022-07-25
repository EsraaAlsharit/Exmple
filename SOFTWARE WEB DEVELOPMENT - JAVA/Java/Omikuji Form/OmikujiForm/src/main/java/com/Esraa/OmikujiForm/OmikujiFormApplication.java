package com.Esraa.OmikujiForm;

import javax.servlet.http.HttpSession;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	public String show() {
		return "show.jsp";
	}

	// @RequestMapping(value = "/show", method = RequestMethod.POST)
	// @PostMapping("/send")
	// @RequestMapping("/send")
	@RequestMapping(method = RequestMethod.POST)
	public String send(@RequestParam(value = "year") int year, HttpSession session) {
		// // Your code here! Add values to the view model to be rendered
		// session.setAttribute("year", year);
		// session.setAttribute("city", city);
		// session.setAttribute("name", name);
		// session.setAttribute("job", job);
		// session.setAttribute("thing", thing);
		// session.setAttribute("something", something);

		return "redirect:/omikuji/show";
	}
}
