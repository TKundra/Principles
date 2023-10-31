class Triangle {
    public base: number;
    public height: number;
    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }
}

class Rectangle {
    public width: number;
    public height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

function computeArea(shapes: Array<Rectangle | Triangle>) {
    return shapes.map((shape) => {
        if (shape instanceof Rectangle) {
            return (shape.width * shape.height);
        }
        if(shape instanceof Triangle) {
            return (shape.base * shape.height * 0.5);
        }
        return -1;
    })
}

/**
 * The problem with this method is that every time we add a new shape, we have to change our computeArea function,
 * thereby violating the open-cloased concept.
 * To demonstrate this, let's add another shape called Circle

class Circle {
    public radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
}

function computeArea(shapes: Array<Rectangle | Triangle | Circle>) {
    return shapes.map((shape) => {
        if (shape instanceof Rectangle) {
            return (shape.width * shape.height);
        }
        if(shape instanceof Triangle) {
            return (shape.base * shape.height * 0.5);
        }
        if(shape instanceof Circle) {
            return (shape.radius + Math.PI);
        }
        return -1;
    })
}

*/

const rectangle = new Rectangle(4, 5);
const triangle = new Triangle(5, 3);
console.log(computeArea([triangle, rectangle]))