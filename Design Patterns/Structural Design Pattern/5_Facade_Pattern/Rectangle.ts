import { ShapeInterface } from "./ShapeInterface";

class Rectangle implements ShapeInterface {
    draw(): void {
        console.log('Rectangle::draw()');
    }
}

export default Rectangle;