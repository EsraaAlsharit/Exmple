package com.Esraa.DojoandNinjas.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.Esraa.DojoandNinjas.models.Ninjas;

public interface NinjasRepository extends CrudRepository<Ninjas, Long> {

    // this method retrieves all the books from the database
    List<Ninjas> findAll();

}
