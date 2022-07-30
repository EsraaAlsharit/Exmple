package com.Esraa.EditPokeBook.controllers;

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

import com.Esraa.EditPokeBook.models.Expense;
import com.Esraa.EditPokeBook.services.ExpenseService;

@Controller
// @RestController
public class ExpenseControllers {

    private final ExpenseService expenseService;

    public ExpenseControllers(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @RequestMapping("/api/Expenses")
    public String index(@ModelAttribute("Expense") Expense expense, Model model) {// display all
        model.addAttribute("expenses_name", expenseService.allExpenses());
        return "index.jsp";
    }

    //
    // // @RequestMapping("/api/Expenses")//display all
    // // public List<Expense> index() {
    // // return expenseService.allExpenses();
    // // }
    //

    @RequestMapping(value = "/expense/{id}", method = RequestMethod.PUT) // update
    public String update(@Valid @ModelAttribute("Expense") Expense expense, @PathVariable("id") Long id,
            BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
            expenseService.updateExpense(expense, id);
            return "redirect:/api/Expenses";
        }

    }

    @RequestMapping(value = "/api/Expenses", method = RequestMethod.POST) // add
    public String create(@Valid @ModelAttribute("Expense") Expense expense, BindingResult result,
            Model model) {
        if (result.hasErrors()) {
            model.addAttribute("expenses_name", expenseService.allExpenses());
            return "index.jsp";

        } else {
            expenseService.createExpense(expense);
            return "redirect:/api/Expenses";
        }
    }

    // @RequestMapping(value = "/api/Expense", method = RequestMethod.POST) // add
    // public Expense create(@RequestParam(value = "name") String name,
    // @RequestParam(value = "description") String description,
    // @RequestParam(value = "vender") String vender,
    // @RequestParam(value = "amount") double amount) {
    // Expense Expense = new Expense(name, vender, amount, description);
    // return expenseService.createExpense(Expense);
    // }
    // @RequestMapping("/api/Expenses/{id}")
    // public Expense show(@PathVariable("id") Long id) {
    // Expense Expense = ExpenseService.findExpense(id);
    // return Expense;
    // }

    @RequestMapping("/api/Expenses/{id}")
    public String edit(@PathVariable("id") Long id, Model model) {
        Expense expense = expenseService.findExpense(id);
        model.addAttribute("Expense", expense);
        return "edit.jsp";
    }// load form edit

    // @RequestMapping(value = "/api/Expenses/{id}", method = RequestMethod.PUT) //
    // update
    // public String update(
    // @PathVariable("id") Long id,
    // @RequestParam(value = "name") String name,
    // @RequestParam(value = "Vender") String vender,
    // @RequestParam(value = "amount") Double amount,
    // @RequestParam(value = "description") String description) {
    // expenseService.updateExpense(id, name, vender, amount, description);
    // return "redirect:/api/Expenses";
    // }

    // @RequestMapping(value = "/api/Expenses/{id}", method = RequestMethod.PUT) //
    // update
    // public Expense update(
    // @PathVariable("id") Long id,
    // @RequestParam(value = "name") String name,
    // @RequestParam(value = "Vender") String vender,
    // @RequestParam(value = "amount") Double amount,
    // @RequestParam(value = "description") String description) {
    // Expense Expense = expenseService.updateExpense(id, name, vender,
    // amount,description);
    // return Expense;
    // }

    // @RequestMapping(value = "/api/Expenses/{id}", method = RequestMethod.DELETE)
    // public void destroy(@PathVariable("id") Long id) {
    // ExpenseService.deleteExpense(id);
    // }
}
