import { ShapeInterface } from "./ShapeInterface";

class Rectangle implements ShapeInterface {
    draw(): void {
        console.log('Shape: Rectangle');
    }
}

export default Rectangle;