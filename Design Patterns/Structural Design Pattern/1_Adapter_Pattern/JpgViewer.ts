import { AdvancedImageViewerInterface } from "./AdvancedImageViewerInterface";

class JpgViewer implements AdvancedImageViewerInterface {
    showJpg(fileName: string): void {
        console.log(`showing ${fileName} in jpg format`)
    }

    showPng(fileName: string): void {
        // do nothing
    }
}

export default JpgViewer;