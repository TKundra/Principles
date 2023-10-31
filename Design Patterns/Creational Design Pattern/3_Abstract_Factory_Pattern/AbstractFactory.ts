import { Shape } from "./Interface";

export abstract class AbstractFactory {
    abstract getShape(shape: string): Shape;
}