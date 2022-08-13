package com.Esraa.ProductsCategories.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import com.Esraa.ProductsCategories.models.Category;
import com.Esraa.ProductsCategories.models.Product;
import com.Esraa.ProductsCategories.repositories.ProductRepository;

@Service
public class ProductServices {
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private CategoryServices CategoryService;

	// returns all the Categoriess
	public List<Product> allProduct() {
		return productRepository.findAll();
	}

	public List<Product> findNotContainsByCategory(Category Cat) {
		return productRepository.findByCategoriesNotContains(Cat);
	}

	// creates a Categories
	public Product createProduct(Product b) {
		return productRepository.save(b);
	}

	public Product addListCategory(Product b, Long Cid) {
		Category Category = CategoryService.findCategory(Cid);
		b.setCategory(Category);
		return productRepository.save(b);
	}

	// retrieves a Categories
	public Product findProduct(Long id) {
		Optional<Product> optionalCategories = productRepository.findById(id);

		if (optionalCategories.isPresent()) {
			return optionalCategories.get();
		} else {
			return null;
		}
	}

}
