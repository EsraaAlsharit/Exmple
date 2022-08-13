package com.Esraa.DojoandNinjas.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.Esraa.DojoandNinjas.models.Dojo;
import com.Esraa.DojoandNinjas.services.DojoServices;

@Controller
public class DojoControllers {

    @Autowired
    private final DojoServices dojoService;

    public DojoControllers(DojoServices DojoService) {
        this.dojoService = DojoService;
    }

    @RequestMapping("/Dojo/{id}")
    public String index(@PathVariable("id") Long id, Model model) {// display all
        Dojo dojo = dojoService.findDojo(id);
        model.addAttribute("Dojo", dojo);
        return "index.jsp";
    }

    @RequestMapping("/dojos/new")
    public String New(@ModelAttribute("Dojo") Dojo dojo) {
        return "dojo.jsp";
    }

    @RequestMapping(value = "/Dojo", method = RequestMethod.POST) // add
    public String create(@Valid @ModelAttribute("Dojo") Dojo dojo, BindingResult result) {
        if (result.hasErrors()) {
            return "dojo.jsp";

        } else {
            dojoService.createDojo(dojo);
            return "redirect:/dojos/new";
        }
    }

}
