/**
 * The factory design pattern is used when we have a superclass with multiple subclasses and based on input, we need to return one of the sub-class.
 * This pattern takes out the responsibility of the instantiation of a class from the client program to the factory class.
 * Consider an example of using multiple database servers like SQL Server and Oracle.
 * If you are developing an application using SQL Server database as backend, but in future need to change backend database to oracle, you will need to modify all your code, if you haven't written your code following factory design pattern.
*/

import ShapeFactory from "./ShapeFactory";

import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Square from "./Square";

const shapeFactory = new ShapeFactory();

const circle = shapeFactory.getShape('circle');
const rectangle = shapeFactory.getShape('rectangle');
const square = shapeFactory.getShape('square');

console.log(circle instanceof Circle);
console.log(rectangle instanceof Rectangle);
console.log(square instanceof Square);