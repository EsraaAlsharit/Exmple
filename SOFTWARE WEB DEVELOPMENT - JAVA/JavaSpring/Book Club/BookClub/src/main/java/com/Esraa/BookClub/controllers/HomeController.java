package com.Esraa.BookClub.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
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

import com.Esraa.BookClub.models.Book;
import com.Esraa.BookClub.models.LoginUser;
import com.Esraa.BookClub.models.User;
import com.Esraa.BookClub.services.BookService;
import com.Esraa.BookClub.services.UserService;

@Controller
public class HomeController {

    @Autowired
    private UserService userServ;
    @Autowired
    private BookService bookServ;

    @GetMapping("/")
    public String index(Model model, HttpSession session) {
        if (session.getAttribute("user_id") == null) {
            model.addAttribute("newUser", new User());
            model.addAttribute("newLogin", new LoginUser());
            return "forms.jsp";
        } else {
            return "redirect:/books";
        }
    }

    @GetMapping("/books")
    public String welcome(Model model, HttpSession session) {
        if (session.getAttribute("user_id") != null) {
            User user = userServ.findUser((Long) session.getAttribute("user_id"));
            model.addAttribute("User", user);
            List<Book> book = bookServ.allBooks();
            model.addAttribute("Books", book);
            return "index.jsp";
        } else {
            return "redirect:/";
        }
    }

    @PostMapping("/book/add") // add
    public String create(@Valid @ModelAttribute("Book") Book book, BindingResult result, Model model,
            HttpSession session) {
        if (session.getAttribute("user_id") != null) {
            if (result.hasErrors()) {
                return "add.jsp";
            } else {
                User user = userServ.findUser((Long) session.getAttribute("user_id"));
                book.setUser(user);
                // bookServ.createBook(book,user);
                bookServ.createBook(book);
                return "redirect:/books";
            }
        } else {
            return "redirect:/";
        }

    }

    @GetMapping("/book/new") // add form
    public String New(@ModelAttribute("Book") Book book, BindingResult result, Model model, HttpSession session) {
        if (session.getAttribute("user_id") != null) {

            return "add.jsp";
        } else {
            return "redirect:/";
        }
    }

    @GetMapping("/book/{id}/edit") // edit form
    public String edit(@PathVariable("id") Long id, @ModelAttribute("Book") Book bookinfo, BindingResult result,
            Model model, HttpSession session) {
        if (session.getAttribute("user_id") != null) {
            Book book = bookServ.findBook(id);
            model.addAttribute("id", id);
            model.addAttribute("Book", book);
            return "edit.jsp";
        } else {
            return "redirect:/";
        }
    }

    @PutMapping("/book/{id}/edit") // update
    public String update(@PathVariable("id") Long id, @Valid @ModelAttribute("Book") Book bookinfo,
            BindingResult result, HttpSession session, Model model) {
        if (session.getAttribute("user_id") != null) {
            if (result.hasErrors()) {
                model.addAttribute("id", id);
                return "edit.jsp";
            } else {
                bookServ.updateBook(bookinfo, id);
                return "redirect:/books";
            }
        } else {
            return "redirect:/";
        }

    }

    @PostMapping("/book/{id}") // update
    public String update(@Valid @ModelAttribute("Book") Book book, BindingResult result, @PathVariable("id") Long id,
            Model model, HttpSession session) {
        if (session.getAttribute("user_id") != null) {
            if (result.hasErrors()) {
                return "edit.jsp";
            } else {
                bookServ.updateBook(book, id);
                return "redirect:/api/Expenses";
            }
        } else {
            return "redirect:/";
        }

    }

    @GetMapping("/book/{id}") // details
    public String details(@PathVariable("id") Long id, Model model, HttpSession session) {
        if (session.getAttribute("user_id") != null) {
            Book book = bookServ.findBook(id);
            model.addAttribute("Book", book);
            User user = userServ.findUser((Long) session.getAttribute("user_id"));
            model.addAttribute("User", user);

            return "details.jsp";
        } else {
            return "redirect:/";
        }
    }

    @GetMapping("/logout")
    public String logout(Model model, HttpSession session) {
        if (session.getAttribute("user_id") != null) {
            session.removeAttribute("user_id");
            return "redirect:/";
        } else {
            return "redirect:/";
        }
    }

    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser,
            BindingResult result, Model model, HttpSession session) {
        userServ.register(newUser, result);
        if (result.hasErrors()) {
            model.addAttribute("newLogin", new LoginUser());
            return "index.jsp";
        }
        session.setAttribute("user_id", newUser.getId());
        return "redirect:/books";
    }

    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin,
            BindingResult result, Model model, HttpSession session) {
        User user = userServ.login(newLogin, result);
        if (result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "index.jsp";
        }
        session.setAttribute("user_id", user.getId());
        return "redirect:/books";
    }
}
