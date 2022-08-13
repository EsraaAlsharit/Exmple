package com.Esraa.Lookify.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.Esraa.Lookify.models.Lookify;
import com.Esraa.Lookify.services.LookifyServices;

@Controller
public class LookifyControllers {

    private final LookifyServices lookifyService;

    public LookifyControllers(LookifyServices LookifyService) {
        this.lookifyService = LookifyService;
    }

    @RequestMapping("")
    public String welcome() {// welcome page
        return "welcome.jsp";
    }

    @RequestMapping("/dashboard")
    public String index(Model model) {// display all
        model.addAttribute("Lookify_list", lookifyService.allLookify());
        return "index.jsp";
    }

    @RequestMapping("/songs/new")
    public String addForm(@ModelAttribute("Lookify") Lookify Lookify) {// add form
        return "add.jsp";
    }

    @RequestMapping("/Lookify/{id}")
    public String info(@PathVariable("id") Long id, Model model) {// display details
        Lookify Lookify = lookifyService.findLookify(id);
        model.addAttribute("Lookify", Lookify);
        return "details.jsp";
    }

    @RequestMapping(value = "/Lookify/{id}", method = RequestMethod.PUT) // update
    public String update(@Valid @ModelAttribute("Lookify") Lookify Lookify, @PathVariable("id") Long id,
            BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
            lookifyService.updateLookify(Lookify, id);
            return "redirect:/dashboard";
        }

    }

    @RequestMapping(value = "/Lookify", method = RequestMethod.POST) // add
    public String create(@Valid @ModelAttribute("Lookify") Lookify Lookify, BindingResult result) {
        if (result.hasErrors()) {
            return "add.jsp";

        } else {
            lookifyService.createLookify(Lookify);
            return "redirect:/dashboard";
        }
    }

    // @PostMapping("/search")
    // public String search(@RequestParam("search") String artist) {
    // return "redirect:/search/" + artist;
    // }

    @RequestMapping("/search")
    public String showSearch(Model model, @RequestParam(value = "search") String name) {
        System.out.println(name);
        // List<Lookify> lookify = lookifyService.findLookifyArtist(name);
        model.addAttribute("artists", lookifyService.findLookifyArtist(name));

        return "result.jsp";
    }

    // @RequestMapping(value = "/search", method = RequestMethod.POST)
    // public String search(Model model, @RequestParam(value = "search") String
    // name) {
    // Lookify Lookify = lookifyService.findLookifyArties(name);
    // model.addAttribute("Lookify_list", Lookify);
    // return "result.jsp";
    // }// load search result

    @RequestMapping("/search/topTen")
    public String edit(Model model) {
        model.addAttribute("Top_ten", lookifyService.getTopSongs());
        return "topTen.jsp";
    }// load search result

    @RequestMapping(value = "/Lookify/{id}", method = RequestMethod.DELETE) // del
    public String destroy(@PathVariable("id") Long id) {
        lookifyService.deleteLookify(id);
        return "redirect:/dashboard";
    }
}
