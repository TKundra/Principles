import { DrawApiInterface } from "./DrawApiInterface";

class RedCircle implements DrawApiInterface {
    drawCircle(radius: number, x: number, y: number): void {
        console.log(`Drawing Circle [color: red, radius: ${radius}, x: ${x}, y: ${y}]`);
    }
}

export default RedCircle;