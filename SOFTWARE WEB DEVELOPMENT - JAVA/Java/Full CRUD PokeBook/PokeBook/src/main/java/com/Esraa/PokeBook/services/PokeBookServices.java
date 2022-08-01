package com.Esraa.PokeBook.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.Esraa.PokeBook.models.PokeBook;
import com.Esraa.PokeBook.repositories.PokeBookRepository;

@Service
public class PokeBookServices {
	// adding the PokeBook repository as a dependency
	private final PokeBookRepository PokeBookRepository;

	public PokeBookServices(PokeBookRepository PokeBookRepository) {
		this.PokeBookRepository = PokeBookRepository;
	}

	// returns all the PokeBooks
	public List<PokeBook> allPokeBooks() {
		return PokeBookRepository.findAll();
	}

	// creates a PokeBook
	public PokeBook createPokeBook(PokeBook b) {
		return PokeBookRepository.save(b);
	}

	// retrieves a PokeBook
	public PokeBook findPokeBook(Long id) {
		Optional<PokeBook> optionalPokeBook = PokeBookRepository.findById(id);
		if (optionalPokeBook.isPresent()) {
			return optionalPokeBook.get();
		} else {
			return null;
		}
	}

	// public PokeBook updatePokeBook(Long id, String name, String vender, double
	// amount, String description) {
	// PokeBook optionalPokeBook = findPokeBook(id);
	// optionalPokeBook.setName(name);
	// optionalPokeBook.setDescription(description);
	// optionalPokeBook.setAmount(amount);
	// optionalPokeBook.setVender(vender);
	// return PokeBookRepository.save(optionalPokeBook);
	// }

	public PokeBook updatePokeBook(PokeBook PokeBook, Long id) {
		// PokeBook optionalPokeBook = findPokeBook(id);
		PokeBook optionalPokeBook = PokeBookRepository.findById(id).get();

		optionalPokeBook.setName(PokeBook.getName());
		optionalPokeBook.setDescription(PokeBook.getDescription());
		optionalPokeBook.setAmount(PokeBook.getAmount());
		optionalPokeBook.setVender(PokeBook.getVender());
		return PokeBookRepository.save(optionalPokeBook);
	}

	public void deletePokeBook(Long id) {
		PokeBookRepository.deleteById(id);

	}

}
