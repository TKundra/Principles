/**
 * In Abstract Factory pattern an interface is responsible for creating a factory of related objects without explicitly specifying their classes.
 * Each generated factory can give the objects as per the Factory pattern.
*/

import { AbstractFactory } from "./AbstractFactory";
import FactoryProducer from "./FactoryProducer";
import { Shape } from "./Interface";

const shapeFactory: AbstractFactory = FactoryProducer.getFactory(false);
const squareShape: Shape = shapeFactory.getShape('square');
squareShape.draw();

const roundedShapeFactory: AbstractFactory = FactoryProducer.getFactory(true);
const roundedRectangleShape: Shape = roundedShapeFactory.getShape('rectangle')
roundedRectangleShape.draw()