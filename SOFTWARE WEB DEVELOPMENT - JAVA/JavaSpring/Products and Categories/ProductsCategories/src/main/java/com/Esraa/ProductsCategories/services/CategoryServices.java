package com.Esraa.ProductsCategories.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.Esraa.ProductsCategories.models.Category;
import com.Esraa.ProductsCategories.models.Product;
import com.Esraa.ProductsCategories.repositories.CategoryRepository;

@Service
public class CategoryServices {
	@Autowired
	private CategoryRepository CategoryRepository;
	

	// returns all the Categorys
	public List<Category> allCategory() {
		return CategoryRepository.findAll();
	}

	// creates a Category
	public Category createCategory(Category b) {
		return CategoryRepository.save(b);
	}

	public List<Category> findNotContainsByCategory(Product product) {// pro
		return CategoryRepository.findByProductsNotContains(product);
	}

	// public List<Category> findByCategory(Product product) {//cat
	// return CategoryRepository.findAllByProducts(product);
	// }

	public Category addListProduct(Category C, Product product) {
		C.setProducts(product);
		return CategoryRepository.save(C);
	}

	// retrieves a Category
	public Category findCategory(Long id) {
		Optional<Category> optionalCategory = CategoryRepository.findById(id);

		if (optionalCategory.isPresent()) {
			return optionalCategory.get();
		} else {
			return null;
		}
	}

}
