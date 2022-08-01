package com.Esraa.PokeBook.controllers;

import java.lang.reflect.Method;
import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Esraa.PokeBook.models.PokeBook;
import com.Esraa.PokeBook.services.PokeBookServices;

@Controller
// @RestController
public class PokeBookControllers {

    private final PokeBookServices PokeBookService;

    public PokeBookControllers(PokeBookServices PokeBookService) {
        this.PokeBookService = PokeBookService;
    }

    @RequestMapping("/api/Expenses")
    public String index(@ModelAttribute("PokeBook") PokeBook PokeBook, Model model) {// display all
        model.addAttribute("PokeBooks_name", PokeBookService.allPokeBooks());
        return "index.jsp";
    }

    @RequestMapping("/api/Expense/{id}")
    public String info(@PathVariable("id") Long id, Model model) {// display details
        PokeBook PokeBook = PokeBookService.findPokeBook(id);
        model.addAttribute("PokeBook", PokeBook);
        return "details.jsp";
    }

    //
    // // @RequestMapping("/api/Expenses")//display all
    // // public List<PokeBook> index() {
    // // return PokeBookService.allPokeBooks();
    // // }
    //

    @RequestMapping(value = "/api/Expense/{id}", method = RequestMethod.PUT) // update
    public String update(@Valid @ModelAttribute("PokeBook") PokeBook PokeBook, @PathVariable("id") Long id,
            BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
            PokeBookService.updatePokeBook(PokeBook, id);
            return "redirect:/api/Expenses";
        }

    }

    @RequestMapping(value = "/api/Expense", method = RequestMethod.POST) // add
    public String create(@Valid @ModelAttribute("PokeBook") PokeBook PokeBook, BindingResult result,
            Model model) {
        if (result.hasErrors()) {
            model.addAttribute("PokeBooks_name", PokeBookService.allPokeBooks());
            return "index.jsp";

        } else {
            PokeBookService.createPokeBook(PokeBook);
            return "redirect:/api/Expenses";
        }
    }

    @RequestMapping("/api/edit/Expense/{id}")
    public String edit(@PathVariable("id") Long id, Model model) {
        PokeBook PokeBook = PokeBookService.findPokeBook(id);
        model.addAttribute("PokeBook", PokeBook);
        return "edit.jsp";
    }// load form edit

    @RequestMapping(value = "/api/Expense/{id}", method = RequestMethod.DELETE) // del
    public String destroy(@PathVariable("id") Long id) {
        PokeBookService.deletePokeBook(id);
        return "redirect:/api/Expenses";
    }
}
