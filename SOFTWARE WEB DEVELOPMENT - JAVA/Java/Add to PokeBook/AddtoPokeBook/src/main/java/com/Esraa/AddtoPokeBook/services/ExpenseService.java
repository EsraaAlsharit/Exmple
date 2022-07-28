package com.Esraa.AddtoPokeBook.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.Esraa.AddtoPokeBook.models.Expense;
import com.Esraa.AddtoPokeBook.repositories.ExpenseRepository;

@Service
public class ExpenseService {
	// adding the Expense repository as a dependency
	private final ExpenseRepository ExpenseRepository;

	public ExpenseService(ExpenseRepository ExpenseRepository) {
		this.ExpenseRepository = ExpenseRepository;
	}

	// returns all the Expenses
	public List<Expense> allExpenses() {
		return ExpenseRepository.findAll();
	}

	// creates a Expense
	public Expense createExpense(Expense b) {
		return ExpenseRepository.save(b);
	}

	// retrieves a Expense
	public Expense findExpense(Long id) {
		Optional<Expense> optionalExpense = ExpenseRepository.findById(id);
		if (optionalExpense.isPresent()) {
			return optionalExpense.get();
		} else {
			return null;
		}
	}

	public Expense updateExpense(Long id, String name, String vender, double amount, String description) {
		Expense optionalExpense = findExpense(id);
		optionalExpense.setName(name);
		optionalExpense.setDescription(description);
		optionalExpense.setAmount(amount);
		optionalExpense.setVender(vender);
		return ExpenseRepository.save(optionalExpense);
	}

	public void deleteExpense(Long id) {
		ExpenseRepository.deleteById(id);

	}

}
