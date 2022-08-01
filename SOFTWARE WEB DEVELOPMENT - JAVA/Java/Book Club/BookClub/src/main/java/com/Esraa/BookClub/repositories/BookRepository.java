package com.Esraa.BookClub.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.Esraa.BookClub.models.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

    // this method retrieves all the books from the database
    List<Book> findAll();

}
