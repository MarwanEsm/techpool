package project.techpool.repository;

import project.techpool.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Additional query methods (if any) go here
}
