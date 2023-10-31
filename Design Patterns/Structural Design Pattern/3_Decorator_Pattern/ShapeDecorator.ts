import { ShapeInterface } from "./ShapeInterface";

export abstract class ShapeDecorator implements ShapeInterface {
    protected decoratedShape: ShapeInterface;

    constructor(decoratedShape: ShapeInterface) {
        this.decoratedShape = decoratedShape;
    }

    public draw(): void {
        this.decoratedShape.draw();
    }
}
