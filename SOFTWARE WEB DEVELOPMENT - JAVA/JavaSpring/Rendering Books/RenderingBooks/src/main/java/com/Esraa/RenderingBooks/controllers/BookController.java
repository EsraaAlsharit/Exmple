package com.Esraa.RenderingBooks.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


import com.Esraa.RenderingBooks.models.Book;
import com.Esraa.RenderingBooks.services.BookService;


@Controller
public class BookController  {
 private final BookService bookService;
 public BookController(BookService bookService){
     this.bookService = bookService;
 }
// @RequestMapping("/api/books")
// public String index(Model model) {
//	 model.addAttribute("books",bookService.allBooks());
//	 
//     return "index.jsp";
// }

 
 @RequestMapping("/api/books/{id}")
 public String show(Model model,@PathVariable("id") Long id) {
     Book book = bookService.findBook(id);
     model.addAttribute("book",book);
     return "show.jsp";
 }
 
}

