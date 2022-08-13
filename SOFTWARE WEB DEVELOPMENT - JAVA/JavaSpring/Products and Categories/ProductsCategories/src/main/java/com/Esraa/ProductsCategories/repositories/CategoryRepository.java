package com.Esraa.ProductsCategories.repositories;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.Esraa.ProductsCategories.models.Category;
import com.Esraa.ProductsCategories.models.Product;

public interface CategoryRepository extends CrudRepository<Category, Long> {

    // this method retrieves all the books from the database
    List<Category> findAll();

    // // Retrieves a list of all categories for a particular product
    // List<Category> findAllByProducts(Product product);// cat

    // // Retrieves a list of any categories a particular product
    // // does not belong to.
    List<Category> findByProductsNotContains(Product product);// pro

}
