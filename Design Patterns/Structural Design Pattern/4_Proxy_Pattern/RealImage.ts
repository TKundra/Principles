import { ImageInterface } from "./ImageInterface";

class RealImage implements ImageInterface {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
        this.loadFromDisk(fileName);
    }

    display(): void {
        console.log(`Displaying ${this.fileName}`);
    }

    private loadFromDisk(fileName: string): void {
        console.log(`Loading ${fileName}`);
    }
}

export default RealImage;