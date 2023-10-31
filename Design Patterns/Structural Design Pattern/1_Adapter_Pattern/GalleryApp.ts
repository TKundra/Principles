import { ImageViewerInterface } from "./ImageViewerInterface";
import ImageAdapter from "./ImageAdapter";

class GalleryApp implements ImageViewerInterface {
    private imageAdapter!: ImageAdapter;

    show(imageType: string, fileName: string): void {
        if (imageType.toLowerCase() === "jpeg") {
            // by default gallery app shows JPEG
            console.log(`showing ${fileName} in jpeg format`)
        } else if (imageType.toLowerCase() === "jpg" || imageType.toLowerCase() === "png") {
            // ImageAdapter is providing support to show other file formats
            this.imageAdapter = new ImageAdapter(imageType)
            this.imageAdapter.show(imageType, fileName);
        } else {
            console.log(`Invalid type! ${imageType} format not supported`);
        }
    }
}

export default GalleryApp;