/**
 * we can solve this issue by enforcing that all of our shapes have a method that returns the area
 */

interface IShapeArea {
    area(): number;
}

class Triangle implements IShapeArea {
    public base: number;
    public height: number;
    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }
    area(): number {
        return this.base * this.height * 0.5;
    }
}

class Rectangle implements IShapeArea {
    public width: number;
    public height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
}

function computeArea(shapes: IShapeArea[]) {
    return shapes.map((shape) => {
        return shape.area();
    }, 0)
}

// now you can new class without reflecting existing code
class Circle implements IShapeArea {
    public radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    area(): number {
        return this.radius + Math.PI;
    }
}

const rectangle = new Rectangle(4, 5);
const triangle = new Triangle(5, 3);
const circle = new Circle(5);
console.log(computeArea([circle, triangle, rectangle]))