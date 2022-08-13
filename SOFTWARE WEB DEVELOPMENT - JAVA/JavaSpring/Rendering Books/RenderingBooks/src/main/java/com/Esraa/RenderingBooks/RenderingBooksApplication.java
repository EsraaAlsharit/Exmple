package com.Esraa.RenderingBooks;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.Esraa.RenderingBooks.services.BookService;

@SpringBootApplication
public class RenderingBooksApplication {

	@Autowired
	BookService bookService;
	
	public static void main(String[] args) {
		SpringApplication.run(RenderingBooksApplication.class, args);
	}

}
