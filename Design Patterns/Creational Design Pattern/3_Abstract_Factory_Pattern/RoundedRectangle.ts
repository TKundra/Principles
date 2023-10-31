import { Shape } from "./Interface";

class RoundedRectangle implements Shape {
    draw(): void {
        console.log('inside rounded rectangle -> draw() method');
    }
}

export default RoundedRectangle;