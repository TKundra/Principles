/**
 * Builder pattern builds a complex object using simple objects and using a step by step approach.
 * This type of design pattern comes under creational pattern as this pattern provides one of the best ways to create an object.
 * A Builder class builds the final object step by step.
 * This builder is independent of other objects.
*/

import UserBuilder from "./UserBuilder";
const user1 = new UserBuilder('John', 'Doe')
.setAge(77).setPhone('+1 987 6542')
.setAddress('77-street 69 London').build()

console.log(user1.toString());