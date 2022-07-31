package com.Esraa.Languages.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.Esraa.Languages.models.Languages;
import com.Esraa.Languages.services.LanguagesServices;

@Controller
public class LanguagesControllers {

    private final LanguagesServices languagesService;

    public LanguagesControllers(LanguagesServices LanguagesService) {
        this.languagesService = LanguagesService;
    }

    @RequestMapping("/languages")
    public String index(@ModelAttribute("Language") Languages Languages, Model model) {// display all
        model.addAttribute("Languages_name", languagesService.allLanguages());
        return "index.jsp";
    }

    @RequestMapping("/languages/{id}")
    public String info(@PathVariable("id") Long id, Model model) {// display details
        Languages Languages = languagesService.findLanguages(id);
        model.addAttribute("Language", Languages);
        return "details.jsp";
    }

    @RequestMapping(value = "/languages/{id}", method = RequestMethod.PUT) // update
    public String update(@Valid @ModelAttribute("Languages") Languages Languages, @PathVariable("id") Long id,
            BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
            languagesService.updateLanguages(Languages, id);
            return "redirect:/languages";
        }

    }

    @RequestMapping(value = "/languages", method = RequestMethod.POST) // add
    public String create(@Valid @ModelAttribute("Language") Languages Languages, BindingResult result,
            Model model) {
        if (result.hasErrors()) {
            model.addAttribute("Languages_name", languagesService.allLanguages());
            return "index.jsp";

        } else {
            languagesService.createLanguages(Languages);
            return "redirect:/languages";
        }
    }

    @RequestMapping("/languages/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        Languages Languages = languagesService.findLanguages(id);
        model.addAttribute("Language", Languages);
        return "edit.jsp";
    }// load form edit

    @RequestMapping(value = "/languages/{id}", method = RequestMethod.DELETE) // del
    public String destroy(@PathVariable("id") Long id) {
        languagesService.deleteLanguages(id);
        return "redirect:/languages";
    }
}
