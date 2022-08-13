package com.Esraa.EditPokeBook.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.Esraa.EditPokeBook.models.Expense;

public interface ExpenseRepository extends CrudRepository<Expense, Long> {

    // this method retrieves all the books from the database
    List<Expense> findAll();

}
