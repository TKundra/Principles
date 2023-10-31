import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Square from "./Square";
import { ShapeInterface } from "./ShapeInterface";

class ShapeMaker {
    private circle: ShapeInterface;
    private rectangle: ShapeInterface;
    private square: ShapeInterface;

    constructor() {
        this.circle = new Circle();
        this.rectangle = new Rectangle();
        this.square = new Square();
    }

    public drawCircle(): void {
        this.circle.draw();
    }

    public drawRectangle(): void {
        this.rectangle.draw();
    }

    public drawSquare(): void {
        this.square.draw();
    }
}

export default ShapeMaker;