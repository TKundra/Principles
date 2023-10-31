import { Shape } from "./Interface";

class RoundedSquare implements Shape {
    draw(): void {
        console.log('inside rounded square -> draw() method');
    }
}

export default RoundedSquare;