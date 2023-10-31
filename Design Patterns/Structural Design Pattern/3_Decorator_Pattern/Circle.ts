import { ShapeInterface } from "./ShapeInterface";

class Circle implements ShapeInterface {
    draw(): void {
        console.log('Shape: Circle');
    }
}

export default Circle;