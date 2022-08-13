package com.Esraa.Languages.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.Esraa.Languages.models.Languages;

public interface LanguagesRepository extends CrudRepository<Languages, Long> {

    // this method retrieves all the books from the database
    List<Languages> findAll();


}
