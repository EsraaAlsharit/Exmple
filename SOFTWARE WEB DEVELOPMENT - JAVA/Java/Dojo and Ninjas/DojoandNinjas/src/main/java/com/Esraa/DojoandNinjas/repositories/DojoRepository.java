package com.Esraa.DojoandNinjas.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.Esraa.DojoandNinjas.models.Dojo;

public interface DojoRepository extends CrudRepository<Dojo, Long> {

    // this method retrieves all the books from the database
    List<Dojo> findAll();

 

}
