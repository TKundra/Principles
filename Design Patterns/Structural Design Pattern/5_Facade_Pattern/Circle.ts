import { ShapeInterface } from "./ShapeInterface";

class Circle implements ShapeInterface {
    draw(): void {
        console.log('Circle::draw()');
    }
}

export default Circle;