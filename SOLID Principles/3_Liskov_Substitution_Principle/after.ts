class Shape {
    area(): number {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(protected width: number, protected height: number) {
        super();
    }

    setWidth(width: number) {
        this.width = width;
    }

    setHeight(height: number) {
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(protected size: number) {
        super();
    }

    setSize(size: number) {
        this.size = size;
    }

    area(): number {
        return this.size * this.size;
    }
}

function printArea(shape: Shape) {
    console.log(shape.area());
}

const rectangle = new Rectangle(2, 3);
const square = new Square(2);

printArea(rectangle); // Expected: 6
printArea(square); // Expected: 4


/**
 * In the example before.ts, the violation of LSP occurs because the calculateArea function assumes that a Rectangle object behaves like a generic rectangle, but this assumption fails when a Square is passed, as a square has different properties compared to a rectangle.
 * In the refactored version that adheres to LSP, we create an abstract Shape class that serves as the superclass for both Rectangle and Square.
 * Both subclasses implement the getArea method, allowing them to be used interchangeably in the calculateArea function without altering the behavior of the program.
 * This adherence to LSP ensures that objects of the superclass (Shape) can be replaced with objects of its subclasses (Rectangle and Square) without causing any issues in the program's functionality.
*/