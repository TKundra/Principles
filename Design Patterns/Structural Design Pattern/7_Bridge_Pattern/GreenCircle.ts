import { DrawApiInterface } from "./DrawApiInterface";

class GreenCircle implements DrawApiInterface {
    drawCircle(radius: number, x: number, y: number): void {
        console.log(`Drawing Circle [color: green, radius: ${radius}, x: ${x}, y: ${y}]`);
    }
}

export default GreenCircle;