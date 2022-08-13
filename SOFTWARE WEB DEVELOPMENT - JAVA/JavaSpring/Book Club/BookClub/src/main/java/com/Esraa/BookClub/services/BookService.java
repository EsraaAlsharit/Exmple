package com.Esraa.BookClub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.Esraa.BookClub.models.Book;
import com.Esraa.BookClub.models.User;
import com.Esraa.BookClub.repositories.BookRepository;

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
		// public Book createBook(Book b, User u) {
		// b.setUser(u);
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

	public Book updateBook(Book book, Long id) {
		Book optionalBook = findBook(id);
		optionalBook.setTitle(book.getTitle());
		optionalBook.setAuthor(book.getAuthor());
		optionalBook.setThoughts(book.getThoughts());
		return bookRepository.save(optionalBook);

	}

	public void deleteBook(Long id) {
		// TODO Auto-generated method stub
		bookRepository.deleteById(id);

	}

}
