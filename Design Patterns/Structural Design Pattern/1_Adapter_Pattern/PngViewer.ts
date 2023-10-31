import { AdvancedImageViewerInterface } from "./AdvancedImageViewerInterface";

class PngViewer implements AdvancedImageViewerInterface {
    showPng(fileName: string): void {
        console.log(`showing ${fileName} in png format`)
    }
    showJpg(fileName: string): void {
        // do nothing
    }
}

export default PngViewer;