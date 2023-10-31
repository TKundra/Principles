import { AbstractShape } from "./AbstractShape";

class Rectangle extends AbstractShape {
    constructor() {
        super();
        this.type = 'Rectangle';
    }

    draw(): void {
        console.log('inside rectangle -> draw() method')
    }
}

export default Rectangle;