import { AdvancedImageViewerInterface } from "./AdvancedImageViewerInterface";
import { ImageViewerInterface } from "./ImageViewerInterface";
import JpgViewer from "./JpgViewer";
import PngViewer from "./PngViewer";

class ImageAdapter implements ImageViewerInterface {
    private advancedImageViewer!: AdvancedImageViewerInterface;

    constructor(imageType: string) {
        switch (imageType.toLowerCase()) {
            case 'png':
                this.advancedImageViewer = new PngViewer();
                break;
            case 'jpg':
                this.advancedImageViewer = new JpgViewer()
                break;
            default:
                console.log(`case not handled for image type -> ${imageType}`)
                break;
        }
    }

    show(imageType: string, fileName: string): void {
        switch (imageType.toLowerCase()) {
            case 'png':
                this.advancedImageViewer.showPng(fileName);
                break;
            case 'jpg':
                this.advancedImageViewer.showJpg(fileName);
                break;
            default:
                console.log(`case not handled to view image type -> ${imageType}`)
                break;
        }
    }
}

export default ImageAdapter;