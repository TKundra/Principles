import { ShapeInterface } from "./ShapeInterface";
import { ShapeDecorator } from "./ShapeDecorator";

class RedShapeDecorator extends ShapeDecorator {
    constructor(decoratedShape: ShapeInterface) {
        super(decoratedShape);
    }

    draw(): void {
        this.decoratedShape.draw();
        this.setRedBorder(this.decoratedShape);
    }

    private setRedBorder(decoratedShape: ShapeInterface): void {
        console.log('Border Color: Red');
    }
}

export default RedShapeDecorator;