import { Shape } from "./Interface";
import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Square from "./Square";

class ShapeFactory {
    getShape(shape: string): Shape | null {
        switch (shape.toLowerCase()) {
            case 'circle':
                return new Circle();
            case 'rectangle':
                return new Rectangle();
            case 'square':
                return new Square();
            default:
                return null;
        }
    }
}

export default ShapeFactory;