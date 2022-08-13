package com.Esraa.DojoandNinjas.services;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.Esraa.DojoandNinjas.models.Ninjas;
import com.Esraa.DojoandNinjas.repositories.NinjasRepository;

@Service
public class NinjasServices {

	private final NinjasRepository ninjasRepository;

	public NinjasServices(NinjasRepository ninjasRepository) {
		this.ninjasRepository = ninjasRepository;
	}

	// returns all the Ninjass
	public List<Ninjas> allNinjas() {
		return ninjasRepository.findAll();
	}

	// creates a Ninjas
	public Ninjas createNinjas(Ninjas b) {
		return ninjasRepository.save(b);
	}

	// retrieves a Ninjas
	public Ninjas findNinjas(Long id) {
		Optional<Ninjas> optionalNinjas = ninjasRepository.findById(id);

		if (optionalNinjas.isPresent()) {
			return optionalNinjas.get();
		} else {
			return null;
		}
	}



}
