package com.Esraa.NinjaGoldGame;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;


@Controller
@SpringBootApplication
public class Logs {
	
	String mass;
	String color;
	
	
	public Logs() {
		
	}
	public Logs(String mass, String color) {
		this.mass = mass;
		this.color = color;
	}
	public String getMass() {
		return mass;
	}
	public void setMass(String mass) {
		this.mass = mass;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	
	
}
