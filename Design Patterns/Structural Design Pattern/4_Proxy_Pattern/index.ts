import { ImageInterface } from "./ImageInterface";
import ProxyImage from "./ProxyImage";

const image: ImageInterface = new ProxyImage('test_10mb.jpg');

// image will be loaded from disk
image.display();

// Loading test_10mb.jpg
// Displaying test_10mb.jpg

// image will not be loaded from disk
image.display();