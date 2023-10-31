import { AbstractFactory } from "./AbstractFactory";
import { Shape } from "./Interface";
import Rectangle from "./Rectangle";
import Square from "./Square";

class ShapeFactory extends AbstractFactory {
    getShape(shape: string): Shape {
        switch (shape.toLowerCase()) {
            case 'square':
                return new Square();
            case 'rectangle':
                return new Rectangle();
            default:
                throw new Error('Shape not exists');
        }
    }
}

export default ShapeFactory;