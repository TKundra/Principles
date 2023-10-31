// Class responsible for managing user data and sending notifications
class User {
    private name: String;
    private email: String;

    constructor(name: String, email: String) {
        this.name = name;
        this.email = email;
    }

    getName(): String {
        return this.name;
    }

    getEmail(): String {
        return this.email;
    }

    sendEmail(message: string): void {
        // Logic to send email notification to the user's email
        console.log(`Sending email to ${this.name}: ${message}`);
    }

    sendSMS(message: string): void {
        // Logic to send SMS notification to the user's phone
        console.log(`Sending SMS to ${this.name}: ${message}`);
    }
}

// Usage
const user = new User("John Doe", "johndoe@example.com");
user.sendEmail("Your order has been shipped.");
user.sendSMS("Your account has been logged into.");