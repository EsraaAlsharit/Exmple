package com.Esraa.ProjectManager.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.Esraa.ProjectManager.models.Project;
import com.Esraa.ProjectManager.models.User;

public interface ProjectRepository extends CrudRepository<Project, Long> {

    // this method retrieves all the books from the database
    List<Project> findAll();

    List<Project> findByTasksContaining(User user);

    List<Project> findByMembersContaining(User user);

    List<Project> findByMembersNotContaining(User user);

    List<Project> findByUser(User user);

    // List<Project> findByMembers(User user);

    // long countByMembers(User user);

}
