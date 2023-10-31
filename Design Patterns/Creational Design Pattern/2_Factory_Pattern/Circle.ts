import { Shape } from "./Interface";

class Circle implements Shape {
    draw(): void {
        console.log('inside circle -> draw() method');
    }
}

export default Circle;