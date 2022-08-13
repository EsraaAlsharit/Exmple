package com.Esraa.EditPokeBook.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.Esraa.EditPokeBook.models.Expense;
import com.Esraa.EditPokeBook.repositories.ExpenseRepository;

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

	// public Expense updateExpense(Long id, String name, String vender, double
	// amount, String description) {
	// Expense optionalExpense = findExpense(id);
	// optionalExpense.setName(name);
	// optionalExpense.setDescription(description);
	// optionalExpense.setAmount(amount);
	// optionalExpense.setVender(vender);
	// return ExpenseRepository.save(optionalExpense);
	// }

	public Expense updateExpense(Expense expense, Long id) {
		// Expense optionalExpense = findExpense(id);
		Expense optionalExpense = ExpenseRepository.findById(id).get();

		optionalExpense.setName(expense.getName());
		optionalExpense.setDescription(expense.getDescription());
		optionalExpense.setAmount(expense.getAmount());
		optionalExpense.setVender(expense.getVender());
		return ExpenseRepository.save(optionalExpense);
	}

	public void deleteExpense(Long id) {
		ExpenseRepository.deleteById(id);

	}

}
