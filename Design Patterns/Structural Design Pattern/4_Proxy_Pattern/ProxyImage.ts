import { ImageInterface } from "./ImageInterface";
import RealImage from "./RealImage";

class ProxyImage implements ImageInterface {
    private realImage!: RealImage;
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    display(): void {
        if (this.realImage == null) {
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.display();
    }
}

export default ProxyImage;