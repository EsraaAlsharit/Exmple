package com.Esraa.DisplayDate;

import java.text.SimpleDateFormat;
//import java.time.LocalDateTime;
//import java.time.format.DateTimeFormatter;
import java.util.Date;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@SpringBootApplication
public class DisplayDateApplication {

	public static void main(String[] args) {
		SpringApplication.run(DisplayDateApplication.class, args);
	}

	@RequestMapping("/")
	public String index() {
		return "index.jsp";

	}

	@RequestMapping("/date")
	public String date(Model model) {

		SimpleDateFormat dateFormat = new SimpleDateFormat("EEEE, MMM dd, yyyy h:mm a");
		Date date = new Date();

		model.addAttribute("date", dateFormat.format(date));
		return "date.jsp";

		
	}

	@RequestMapping("/time")
	public String time(Model model) {

		SimpleDateFormat dateFormat = new SimpleDateFormat("h:mm a");
		Date date = new Date();

		model.addAttribute("time", dateFormat.format(date));

		return "time.jsp";
		// LocalDateTime myDateObj = LocalDateTime.now();
		// DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("HH:mm:ss");
		// String formattedDate = myDateObj.format(myFormatObj);
		// return formattedDate;

	}

}
