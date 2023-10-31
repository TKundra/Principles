class Rectangle {
    constructor(protected width: number, protected height: number) { }

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

class Square extends Rectangle {
    setWidth(width: number) {
        this.width = width;
        this.height = width;
    }

    setHeight(height: number) {
        this.width = height;
        this.height = height;
    }
}

function printArea(rectangle: Rectangle) {
    rectangle.setWidth(3);
    rectangle.setHeight(4);
    console.log(rectangle.area());
}

const rectangle = new Rectangle(2, 3);
const square = new Square(2, 3);

printArea(rectangle);   // Expected: 12
printArea(square);      // Expected: 16, But it returns 12
