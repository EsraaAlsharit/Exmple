package com.Esraa.ProjectManager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.Esraa.ProjectManager.models.Project;
import com.Esraa.ProjectManager.models.User;
import com.Esraa.ProjectManager.repositories.ProjectRepository;

@Service
public class ProjectService {
	// adding the project repository as a dependency
	private final ProjectRepository projectRepository;

	public ProjectService(ProjectRepository projectRepository) {
		this.projectRepository = projectRepository;
	}

	// returns all the projects
	public List<Project> allProjects() {
		return projectRepository.findAll();
	}

	public List<Project> allProjectsNotContain(User user) {
		return projectRepository.findByMembersNotContaining(user);
	}

	public List<Project> allProjectsContain(User user) {
		return projectRepository.findByMembersContaining(user);
	}

	public List<Project> allProjectsByUser(User user) {
		return projectRepository.findByUser(user);
	}
	
	// public List<Project> MembersInProject(User user) {
	// 	return projectRepository.findByMembers(user);
	// }

	// creates a project
	public Project createProject(Project b) {
		return projectRepository.save(b);
	}

	// retrieves a project
	public Project findProject(Long id) {
		Optional<Project> optionalProject = projectRepository.findById(id);
		if (optionalProject.isPresent()) {
			return optionalProject.get();
		} else {
			return null;
		}
	}

	public Project updateProject(Project project, Long id) {// update
		Project optionalProject = findProject(id);
		optionalProject.setTitle(project.getTitle());
		optionalProject.setDescription(project.getDescription());
		optionalProject.setDueDate(project.getDueDate());
		return projectRepository.save(optionalProject);
	}

	public void JoinProject(Project project, Long id, User user) {
		Project optionalProject = findProject(id);
		optionalProject.setMembers(user);
		projectRepository.save(optionalProject);
	}

	public void OutJoinProject(Project project, Long id, User user) {
		Project optionalProject = findProject(id);
		optionalProject.removeMember(user);
		projectRepository.save(optionalProject);
	}

	public void deleteProject(Long id) {
		projectRepository.deleteById(id);
	}

}
