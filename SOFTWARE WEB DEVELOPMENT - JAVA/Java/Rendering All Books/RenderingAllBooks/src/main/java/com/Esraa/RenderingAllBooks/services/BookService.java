package com.Esraa.RenderingAllBooks.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.Esraa.RenderingAllBooks.models.Book;
import com.Esraa.RenderingAllBooks.repositories.BookRepository;

@Service
public class BookService {
	// adding the book repository as a dependency
	private final BookRepository bookRepository;

	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}

	// returns all the books
	public List<Book> allBooks() {
		return bookRepository.findAll();
	}

	// creates a book
	public Book createBook(Book b) {
		return bookRepository.save(b);
	}

	// retrieves a book
	public Book findBook(Long id) {
		Optional<Book> optionalBook = bookRepository.findById(id);
		if (optionalBook.isPresent()) {
			return optionalBook.get();
		} else {
			return null;
		}
	}

	public Book updateBook(Long id, String title, String desc, String lang, Integer numOfPages) {
		// TODO Auto-generated method stub
		Book optionalBook = findBook(id);

		optionalBook.setTitle(title);
		optionalBook.setDescription(desc);
		optionalBook.setId(id);
		optionalBook.setLanguage(lang);
		optionalBook.setNumberOfPages(numOfPages);
		// Optional<Book> optionalBook1 = bookRepository.findById(id);
		return bookRepository.save(optionalBook);

	}

	public void deleteBook(Long id) {
		// TODO Auto-generated method stub
		bookRepository.deleteById(id);

	}

}
