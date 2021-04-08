import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export interface IImageCarouselProps {
    className?: string;
    images: string[];
}

export const ImageCarousel: React.FC<IImageCarouselProps> = ({ className, images }) => {
    const formattedImages = images.map((url) => ({ original: url }));
    return (
        <div className={className}>
            <div>
                <ImageGallery
                    items={formattedImages}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                />
            </div>
        </div>
    );
};
