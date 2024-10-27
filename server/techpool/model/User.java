package project.techpool.model; // Specifies the package name for the User class

public class User { // Declares the User class

    private String email; // Declares a field to store the user's email
    private String password; // Declares a field to store the user's password
    private String linkedIn; // Declares a field to store the user's LinkedIn profile URL
    private String github; // Declares a field to store the user's GitHub profile URL
    private String owner; // Declares a field to store the type of user (e.g., candidate or employer)

    // Getter and Setter methods for each field

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmationPassword() {
        return confirmationPassword;
    }

    public void setConfirmationPassword(String confirmationPassword) {
        this.confirmationPassword = confirmationPassword;
    }

    public String getLinkedIn() {
        return linkedIn;
    }

    public void setLinkedIn(String linkedIn) {
        this.linkedIn = linkedIn;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }
}
