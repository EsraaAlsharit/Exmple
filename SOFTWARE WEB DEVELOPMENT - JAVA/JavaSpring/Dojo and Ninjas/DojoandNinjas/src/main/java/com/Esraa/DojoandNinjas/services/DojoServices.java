package com.Esraa.DojoandNinjas.services;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.Esraa.DojoandNinjas.models.Dojo;
import com.Esraa.DojoandNinjas.repositories.DojoRepository;

@Service
public class DojoServices {

	private final DojoRepository dojoRepository;

	public DojoServices(DojoRepository DojoRepository) {
		this.dojoRepository = DojoRepository;
	}

	// returns all the Dojos
	public List<Dojo> allDojo() {
		return dojoRepository.findAll();
	}

	// creates a Dojo
	public Dojo createDojo(Dojo b) {
		return dojoRepository.save(b);
	}

	// retrieves a Dojo
	public Dojo findDojo(Long id) {
		Optional<Dojo> optionalDojo = dojoRepository.findById(id);
		if (optionalDojo.isPresent()) {
			return optionalDojo.get();
		} else {
			return null;
		}
	}

}
