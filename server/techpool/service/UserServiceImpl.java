package project.techpool.service;  // Specifies the package name for the UserServiceImpl class

import project.techpool.model.User;  // Import the User model
import org.springframework.stereotype.Service;  // Import Spring Service annotation
import org.springframework.beans.factory.annotation.Autowired;  // Import Spring Autowired annotation

@Service  // Indicates that this class is a Spring service
public class UserServiceImpl implements UserService {  // Implement the UserService interface

    // Add any dependencies here
    @Autowired
    private UserRepository userRepository;  // Assume you have a UserRepository for database operations

    @Override
    public void registerUser(User user) {
        // Add logic to register a user
        userRepository.save(user);  // Save the user to the database (assuming you have a repository)
    }
}
