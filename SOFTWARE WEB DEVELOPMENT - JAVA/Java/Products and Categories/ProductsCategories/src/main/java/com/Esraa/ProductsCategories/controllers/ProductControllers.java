package com.Esraa.ProductsCategories.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.Esraa.ProductsCategories.models.Product;
import com.Esraa.ProductsCategories.services.CategoryServices;
import com.Esraa.ProductsCategories.services.ProductServices;

@Controller
public class ProductControllers {
    @Autowired
    private ProductServices productService;
    @Autowired
    private CategoryServices CategoryService;

    @GetMapping("/Product/{id}")
    public String index(@PathVariable("id") Long id, Model model,
            @ModelAttribute("Product") Product Productinfo) {// display
        Product Product = productService.findProduct(id);
        model.addAttribute("productObj", Product);
        model.addAttribute("category",
                CategoryService.findNotContainsByCategory(Product));
        return "Productindex.jsp";
    }

    @GetMapping("/Products/new")
    public String New(@ModelAttribute("Product") Product Product, Model model) {
        return "Product.jsp";
    }

    @PostMapping("/Product") // add
    public String AddProduct(@Valid @ModelAttribute("Product") Product Product, BindingResult result) {
        if (result.hasErrors()) {
            return "Product.jsp";

        } else {
            productService.createProduct(Product);
            return "redirect:/Products/new";
        }
    }

    @PostMapping("/addCategory/{id}") // add
    public String AddCategory(@RequestParam(value = "Category") Long Cid,
            @PathVariable("id") Long Pid) {
        // System.out.println(id);
        Product Product = productService.findProduct(Pid);
        // Category category= CategoryService.findCategory(Cid);
        productService.addListCategory(Product, Cid);
        return "redirect:/Products/new";

    }

}
