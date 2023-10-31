import { Shape } from "./Interface";

class Square implements Shape {
    draw(): void {
        console.log('inside square -> draw() method');
    }
}

export default Square;