import { ShapeInterface } from "./ShapeInterface";

class Square implements ShapeInterface {
    draw(): void {
        console.log('Square::draw()');
    }
}

export default Square;