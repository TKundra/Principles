/**
 * This pattern involves implementing a prototype interface which tells it to create a clone of the current object.
 * This pattern is used when the creation of an object directly is costly.
 * For example, an object is to be created after a costly database operation.
 * We can cache the object, return its clone on next request and update the database as and when needed thus reducing database calls.
*/

import { AbstractShape } from "./AbstractShape";
import ShapeCache from "./ShapeCache";

ShapeCache.loadCache();

const clonedShapeCircle: AbstractShape = ShapeCache.getShape('1');
console.log('Shape: ', clonedShapeCircle.getType());

const clonedShapeSquare: AbstractShape = ShapeCache.getShape('2');
console.log('Shape: ', clonedShapeSquare.getType());

const clonedShapeRectangle: AbstractShape = ShapeCache.getShape('3');
console.log('Shape: ', clonedShapeRectangle.getType());