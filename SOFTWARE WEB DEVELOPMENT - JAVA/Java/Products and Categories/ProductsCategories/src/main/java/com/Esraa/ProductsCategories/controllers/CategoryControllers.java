package com.Esraa.ProductsCategories.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.*;
import com.Esraa.ProductsCategories.models.Category;
import com.Esraa.ProductsCategories.services.CategoryServices;
import com.Esraa.ProductsCategories.services.ProductServices;

@Controller
public class CategoryControllers {
    @Autowired
    private CategoryServices CategoryService;
    @Autowired
    private ProductServices productService;

    @GetMapping("/Category/{id}")
    public String index(@PathVariable("id") Long id, Model model) {// display all
        Category Category = CategoryService.findCategory(id);
        model.addAttribute("Category", Category);
        model.addAttribute("Product",
                productService.findNotContainsByCategory(Category));

        return "Categoryindex.jsp";
    }

    @GetMapping("/Category/new")
    public String New(@ModelAttribute("Category") Category Category) {

        return "Category.jsp";
    }

    @PostMapping("/Category") // add
    public String create(@Valid @ModelAttribute("Category") Category Category, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("Category", CategoryService.allCategory());
            return "Category.jsp";
        } else {
            CategoryService.createCategory(Category);
            return "redirect:/Category/new";
        }
    }

    @PostMapping("/AddProduct/{id}") // add
    public String AddProduct(@RequestParam(value = "Product") Long Pid,
            @PathVariable("id") Long Cid) {
        Category category = CategoryService.findCategory(Cid);
        // Category category= CategoryService.findCategory(Cid);
        CategoryService.addListProduct(category, Pid);
        return "redirect:/Category/new";

    }
}
