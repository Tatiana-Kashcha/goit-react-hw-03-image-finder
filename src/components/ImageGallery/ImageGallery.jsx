import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import * as s from './ImageGallery.styled';

export const ImageGallery = ({ data }) => {
  return (
    <s.List>
      {data.map(gallery => (
        <s.ListItems key={gallery.id}>
          <ImageGalleryItem gallery={gallery} />
        </s.ListItems>
      ))}
    </s.List>
  );
};
