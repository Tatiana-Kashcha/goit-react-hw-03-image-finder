import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import * as s from './ImageGallery.styled';

export const ImageGallery = ({ data }) => {
  return (
    <s.List>
      {data.map(gallery => (
        <ImageGalleryItem gallery={gallery} />
      ))}
    </s.List>
  );
};
