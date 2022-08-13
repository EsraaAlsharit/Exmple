package com.Esraa.Languages.services;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.Esraa.Languages.models.Languages;
import com.Esraa.Languages.repositories.LanguagesRepository;

@Service
public class LanguagesServices {
	
	private final LanguagesRepository languagesRepository;

	public LanguagesServices(LanguagesRepository LanguagesRepository) {
		this.languagesRepository = LanguagesRepository;
	}

	// returns all the Languagess
	public List<Languages> allLanguages() {
		return languagesRepository.findAll();
	}

	// creates a Languages
	public Languages createLanguages(Languages b) {
		return languagesRepository.save(b);
	}

	// retrieves a Languages
	public Languages findLanguages(Long id) {
		Optional<Languages> optionalLanguages = languagesRepository.findById(id);
		if (optionalLanguages.isPresent()) {
			return optionalLanguages.get();
		} else {
			return null;
		}
	}

	public Languages updateLanguages(Languages Languages, Long id) {
		// Languages optionalLanguages = findLanguages(id);
		Languages optionalLanguages = languagesRepository.findById(id).get();

		optionalLanguages.setName(Languages.getName());
		optionalLanguages.setCreator(Languages.getCreator());
		optionalLanguages.setCurrentVersion(Languages.getCurrentVersion());
		return languagesRepository.save(optionalLanguages);
	}

	public void deleteLanguages(Long id) {
		languagesRepository.deleteById(id);

	}

}
