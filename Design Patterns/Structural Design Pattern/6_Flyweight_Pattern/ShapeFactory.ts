import Circle from "./Circle";
import { ShapeInterface } from "./ShapeInterface";

class ShapeFactory {
    private static circleMap = {};

    static getCircle(color: string): ShapeInterface {
        let circle: Circle = ShapeFactory.circleMap[color];
        if (circle == null) {
            circle = new Circle(color);
            ShapeFactory.circleMap[color] = circle;
            console.log(`Creating circle of color : ${color}`);
        }
        return circle;
    }
}

export default ShapeFactory;