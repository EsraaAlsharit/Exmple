package com.Esraa.Lookify.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.Esraa.Lookify.models.Lookify;

public interface LookifyRepository extends CrudRepository<Lookify, Long> {

    // this method retrieves all the books from the database
    List<Lookify> findAll();

    // Optional<Lookify> findByartistContaining(String artist);

    List<Lookify> findByArtistContaining(String search);

    // Long countByTitleContaining(String search);

    List<Lookify> findTop10ByOrderByRatingDesc();

    // // this method finds books with descriptions containing the search string
    // List<Lookify> findByartistContaining(String artist);

    // // this method counts how many titles contain a certain string
    // Long countByTitleContaining(String search);

}
