// Low-level module representing a MySQL database
class MySQLDatabase {
    insert(query: string, values: string[]): void {
        // Insert the data into the MySQL database
        console.log(`Executing query: ${query} with values: ${values}`);
    }
}

// High-level module representing a user
class User {
    private database: MySQLDatabase;

    constructor() {
        this.database = new MySQLDatabase();
    }

    createUser(username: string, email: string): void {
        this.database.insert("INSERT INTO users(username, email) VALUES(?, ?)", [username, email]);
    }
}

// Usage
const user = new User();
user.createUser('john_doe', 'john@example.com');
