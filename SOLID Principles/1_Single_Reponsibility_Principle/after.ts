// Class responsible for managing user data
class User {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }
}

// Class responsible for sending notifications
class NotificationService {
    sendEmail(user: User, message: string): void {
        // Logic to send email notification to the user's email
        console.log(`Sending email to ${user.getName()}: ${message}`);
    }

    sendSMS(user: User, message: string): void {
        // Logic to send SMS notification to the user's phone
        console.log(`Sending SMS to ${user.getName()}: ${message}`);
    }
}

// Usage
const user = new User("John Doe", "johndoe@example.com");
const notificationService = new NotificationService();
notificationService.sendEmail(user, "Your order has been shipped.");
notificationService.sendSMS(user, "Your account has been logged into.");

/**
 * The before-SRP example violates SRP by having the User class handle both user data management and notification sending, leading to a lack of cohesion and increased complexity.
 * The after-SRP example separates concerns, with the User class only responsible for managing user data, and the NotificationService class handling the task of sending notifications.
 * This adheres to SRP and results in a more maintainable and flexible codebase.
*/