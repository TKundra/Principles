import { Shape } from "./Interface";

class Rectangle implements Shape {
    draw(): void {
        console.log('inside rectangle -> draw() method');
    }
}

export default Rectangle;