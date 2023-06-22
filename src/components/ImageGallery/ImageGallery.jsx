import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data }) => {
  return (
    <s.List>
      {data.map(gallery => (
        <ImageGalleryItem gallery={gallery} />
      ))}
    </s.List>
  );
};
