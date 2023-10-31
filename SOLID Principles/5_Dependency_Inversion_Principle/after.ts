// Interface representing a database
interface Database {
    insert(query: string, values: string[]): void;
}

// Class representing a MySQL database
class MySQLDatabase implements Database {
    insert(query: string, values: string[]): void {
        console.log(`Executing query: ${query} with values: ${values}`);
        // Insert the data into the MySQL database
    }
}

// High-level module representing a user
class User {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    createUser(username: string, email: string): void {
        this.database.insert("INSERT INTO users(username, email) VALUES(?, ?)", [username, email]);
    }
}

// Usage
const mySQLDatabase = new MySQLDatabase();
const user = new User(mySQLDatabase);
user.createUser('john_doe', 'john@example.com');

/**
 * In the before-DIP example, the User class is tightly coupled to the MySQLDatabase class, making it difficult to switch to another database.
 * In the after-DIP example, the User class depends on an abstraction (Database interface) rather than a concrete implementation, allowing different types of databases to be used without affecting the User class.
 * This adherence to DIP ensures that high-level modules do not depend on low-level modules and that both should depend on abstractions.
*/
