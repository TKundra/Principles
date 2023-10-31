import { AbstractFactory } from "./AbstractFactory";
import { Shape } from "./Interface";
import RoundedRectangle from "./RoundedRectangle";
import RoundedSquare from "./RoundedSquare";

class RoundedShapeFactory extends AbstractFactory {
    getShape(shape: string): Shape {
        switch (shape.toLowerCase()) {
            case 'square':
                return new RoundedSquare();
            case 'rectangle':
                return new RoundedRectangle();
            default:
                throw new Error('Shape not exists');
        }
    }
}

export default RoundedShapeFactory;