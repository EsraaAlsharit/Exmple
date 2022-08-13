package com.Esraa.ProductsCategories.repositories;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

import com.Esraa.ProductsCategories.models.Category;
import com.Esraa.ProductsCategories.models.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {

    // this method retrieves all the books from the database
    List<Product> findAll();

    // // Retrieves a list of all categories for a particular Category
    // List<Product> findAllByCategory(Category category);

    // // Retrieves a list of any categories a particular Category
    // // does not belong to.
    List<Product> findByCategoriesNotContains(Category category);

}
