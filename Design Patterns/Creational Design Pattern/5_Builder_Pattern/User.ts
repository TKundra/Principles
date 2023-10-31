import UserBuilder from "./UserBuilder";

class User {
    private readonly firstName: string;
    private readonly lastName: string;
    private readonly age: number;
    private readonly phone: string;
    private readonly address: string;

    constructor(userBuilder: UserBuilder) {
        this.firstName = userBuilder.firstName;
        this.lastName = userBuilder.lastName;
        this.age = userBuilder.age || 0;
        this.phone = userBuilder.phone || '';
        this.address = userBuilder.address || '';
    }

    public getFirstName() : string {
        return this.firstName;
    }

    public getLastName() : string {
        return this.lastName;
    }

    public getAge() : number {
        return this.age;
    }

    public getPhone() : string {
        return this.phone;
    }

    public getAddress() : string {
        return this.address;
    }

    public toString(): string {
        return `
User:
    firstName: ${this.firstName}
    lastName: ${this.lastName}
    age: ${this.age}
    phone: ${this.phone}
    address: ${this.address}
    `;
    }
}

export default User;