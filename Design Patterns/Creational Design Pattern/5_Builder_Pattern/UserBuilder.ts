import User from "./User";

class UserBuilder {
    public readonly firstName: string;
    public readonly lastName: string;
    public age?: number;
    public phone?: string;
    public address?: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public setAge(age: number): UserBuilder {
        this.age = age;
        return this;
    }

    public setPhone(phone: string): UserBuilder {
        this.phone = phone;
        return this;
    }

    public setAddress(address: string): UserBuilder {
        this.address = address;
        return this;
    }

    public build(): User {
        const user = new User(this);
        return user;
    }
}

export default UserBuilder;