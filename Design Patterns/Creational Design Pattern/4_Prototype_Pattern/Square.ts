import { AbstractShape } from "./AbstractShape";

class Square extends AbstractShape {
    constructor() {
        super();
        this.type = 'Square';
    }

    draw(): void {
        console.log('inside square -> draw() method')
    }
}

export default Square;