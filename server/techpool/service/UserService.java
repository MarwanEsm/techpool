package project.techpool.service;  // Specifies the package name for the UserService class

import project.techpool.model.User;  // Imports the User class from the model package
import org.springframework.stereotype.Service;  // Imports the Service annotation

@Service  // Marks this class as a service component, making it eligible for component scanning and dependency injection
public class UserService {

    public void registerUser(User user) {  // Method to handle user registration logic
        // Implement user registration logic here
        // For example, save the user to a database
    }
}
