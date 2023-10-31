import { AbstractShape } from "./AbstractShape";

class Circle extends AbstractShape {
    constructor() {
        super();
        this.type = 'Circle';
    }

    draw(): void {
        console.log('inside circle -> draw() method')
    }
}

export default Circle;