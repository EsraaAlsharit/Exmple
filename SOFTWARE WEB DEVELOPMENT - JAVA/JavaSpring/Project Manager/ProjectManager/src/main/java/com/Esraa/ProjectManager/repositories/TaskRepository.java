package com.Esraa.ProjectManager.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.Esraa.ProjectManager.models.Project;
import com.Esraa.ProjectManager.models.Task;

public interface TaskRepository extends CrudRepository<Task, Long> {

    // this method retrieves all the books from the database
    List<Task> findAll();

    List<Task> findByProject(Project project);
}
