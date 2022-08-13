package com.Esraa.PokeBook.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.Esraa.PokeBook.models.PokeBook;

public interface PokeBookRepository extends CrudRepository<PokeBook, Long> {

    // this method retrieves all the books from the database
    List<PokeBook> findAll();

}
