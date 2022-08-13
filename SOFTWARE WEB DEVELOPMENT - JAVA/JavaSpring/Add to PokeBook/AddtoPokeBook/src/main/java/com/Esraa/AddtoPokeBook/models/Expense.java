package com.Esraa.AddtoPokeBook.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "expense")
public class Expense {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@Size(min = 3, max = 400, message = "Name must be at least 3")
	private String Name;

	@NotNull
	@Size(min = 5, max = 200, message = "Vender must be at least 5")
	private String Vender;

	@NotNull
	@Min(value = 1, message = "Amount must be at least 1")
	private double Amount;

	@NotNull
	@Size(min = 5, max = 200, message = "Description must be at least 5")
	private String description;

	// This will not allow the createdAt column to be updated after creation
	@Column(updatable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdAt;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date updatedAt;

	public Expense() {

	}

	public Expense(String name, String vender, double amount, String description) {
		this.Name = name;
		this.Vender = vender;
		this.Amount = amount;
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getVender() {
		return Vender;
	}

	public void setVender(String vender) {
		Vender = vender;
	}

	public double getAmount() {
		return Amount;
	}

	public void setAmount(double amount) {
		Amount = amount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
