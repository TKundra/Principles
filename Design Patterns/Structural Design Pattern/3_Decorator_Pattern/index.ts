import Circle from "./Circle";
import Rectangle from "./Rectangle";
import RedShapeDecorator from "./RedShapeDecorator";
import { ShapeInterface } from "./ShapeInterface";

const circle: ShapeInterface = new Circle();
const redCircle: ShapeInterface = new RedShapeDecorator(new Circle());
const redRectangle: ShapeInterface = new RedShapeDecorator(new Rectangle());

console.log('Circle with normal border')
circle.draw();
// Circle with normal border
// Shape: Circle

console.log('Circle of red border')
redCircle.draw();
// Circle of red border
// Shape: Circle
// Border Color: Red

console.log('Rectangle of red border');
redRectangle.draw();
// Rectangle of red border
// Shape: Rectangle
// Border Color: Red
