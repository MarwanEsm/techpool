package project.techpool.controller;  // Specifies the package name for the UserController class

import project.techpool.model.User;  // Imports the User class from the model package
import project.techpool.service.UserService;  // Imports the UserService class from the service package
import org.springframework.beans.factory.annotation.Autowired;  // Imports the Autowired annotation
import org.springframework.web.bind.annotation.*;  // Imports various annotations for handling HTTP requests

@RestController  // Indicates that this class is a REST controller, meaning it will handle HTTP requests and responses
@RequestMapping("/api/users")  // Specifies the base URL for all endpoints in this controller
public class UserController {

    @Autowired  // Tells Spring to automatically inject the UserService bean into this field
    private UserService userService;  // Declares a dependency on UserService, which will be used to handle business logic

    @PostMapping("/register")  // Maps HTTP POST requests to the /register endpoint
    public String registerUser(@RequestBody User user) {  // Handles POST requests to /register, accepts a User object in the request body
        userService.registerUser(user);  // Calls the registerUser method of UserService to process the user registration
        return "User registered successfully!";  // Returns a success message
    }
}
