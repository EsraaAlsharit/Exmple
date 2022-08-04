package com.Esraa.ProjectManager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Esraa.ProjectManager.models.Project;
import com.Esraa.ProjectManager.models.Task;
import com.Esraa.ProjectManager.models.User;
import com.Esraa.ProjectManager.repositories.TaskRepository;

@Service
public class TaskService {
	@Autowired
	private TaskRepository taskRepository;

	// returns all the projects
	public List<Task> allTasks() {
		return taskRepository.findAll();
	}

	// creates a project
	public Task createTask(Task b, User user, Project project) {
		b.setCreator(user);
		b.setProject(project);
		return taskRepository.save(b);
	}

	// retrieves a project
	// public Task findTask(Long id) {
	// Optional<Task> optionalProject = taskRepository.findById(id);
	// // Optional<Task> optionalProject1= taskRepository.findByUserId(id);
	// if (optionalProject.isPresent()) {
	// return optionalProject.get();
	// } else {
	// return null;
	// }
	// }

}
