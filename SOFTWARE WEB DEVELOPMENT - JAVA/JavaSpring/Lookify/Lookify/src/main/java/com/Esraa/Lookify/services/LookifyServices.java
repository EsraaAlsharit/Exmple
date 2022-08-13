package com.Esraa.Lookify.services;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.Esraa.Lookify.models.Lookify;
import com.Esraa.Lookify.repositories.LookifyRepository;

@Service
public class LookifyServices {

	private final LookifyRepository lookifyRepository;

	public LookifyServices(LookifyRepository LookifyRepository) {
		this.lookifyRepository = LookifyRepository;
	}

	// returns all the Lookifys
	public List<Lookify> allLookify() {
		return lookifyRepository.findAll();
	}

	// creates a Lookify
	public Lookify createLookify(Lookify b) {
		return lookifyRepository.save(b);
	}

	public List<Lookify> findLookifyArtist(String artist) {
		return lookifyRepository.findByArtistContaining(artist);
	}

	// retrieves a Lookify
	public Lookify findLookify(Long id) {
		Optional<Lookify> optionalLookify = lookifyRepository.findById(id);

		if (optionalLookify.isPresent()) {
			return optionalLookify.get();
		} else {
			return null;
		}
	}

	public Lookify updateLookify(Lookify Lookify, Long id) {
		// Lookify optionalLookify = findLookify(id);
		Lookify optionalLookify = lookifyRepository.findById(id).get();

		optionalLookify.setTitle(Lookify.getTitle());
		optionalLookify.setArtist(Lookify.getArtist());
		optionalLookify.setRating(Lookify.getRating());
		return lookifyRepository.save(optionalLookify);
	}

	public void deleteLookify(Long id) {
		lookifyRepository.deleteById(id);
	}

	public List<Lookify> getTopSongs() {
		return lookifyRepository.findTop10ByOrderByRatingDesc();
	}

}
