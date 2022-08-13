package com.Esraa.BookClub.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.Esraa.BookClub.models.User;

public interface UserRepository extends CrudRepository<User, Long> {

    // this method retrieves all the books from the database
    List<User> findAll();

    Optional<User> findByEmail(String email);

}
