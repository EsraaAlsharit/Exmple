package com.Esraa.DojoandNinjas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import javax.validation.*;
import com.Esraa.DojoandNinjas.models.Ninjas;
import com.Esraa.DojoandNinjas.services.DojoServices;
import com.Esraa.DojoandNinjas.services.NinjasServices;

@Controller
public class NinjasControllers {

    @Autowired
    private NinjasServices ninjasService;

    @Autowired
    private DojoServices dojoService;

    @RequestMapping("/ninjas/new")
    public String New(@ModelAttribute("Ninja") Ninjas ninja, Model model) {
        model.addAttribute("Dojo", dojoService.allDojo());
        return "ninja.jsp";
    }

    @RequestMapping(value = "/Ninja", method = RequestMethod.POST) // add
    public String create(@Valid @ModelAttribute("Ninja") Ninjas ninja, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("Dojo", dojoService.allDojo());
            return "ninja.jsp";
        } else {
            ninjasService.createNinjas(ninja);
            return "redirect:/ninjas/new";
        }
    }
}
