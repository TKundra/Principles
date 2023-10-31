import Circle from "./Circle";
import Rectangle from "./Rectangle";
import { AbstractShape } from "./AbstractShape"
import Square from "./Square";

class ShapeCache {
    private static shapeMap = new Map<string, AbstractShape>;

    public static getShape(shapeId: string): AbstractShape {
        const cachedShape: AbstractShape = ShapeCache.shapeMap.get(shapeId) as AbstractShape;
        return cachedShape;
    }

    public static loadCache(): void {
        const circle = new Circle();
        circle.setId('1');
        ShapeCache.shapeMap.set(circle.getId(), circle);

        const square = new Square();
        square.setId('2');
        ShapeCache.shapeMap.set(square.getId(), square);

        const rectangle = new Rectangle();
        rectangle.setId('3');
        ShapeCache.shapeMap.set(rectangle.getId(), rectangle);
    }
}

export default ShapeCache;