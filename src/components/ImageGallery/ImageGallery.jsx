import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import * as s from './ImageGallery.styled';

export const ImageGallery = ({ data, showModal }) => {
  return (
    <s.List>
      {data.map(({ id, largeImageURL, tags, webformatURL }) => (
        <s.ListItems
          key={id}
          onClick={() => {
            showModal(largeImageURL, tags);
          }}
        >
          <ImageGalleryItem webformatURL={webformatURL} tags={tags} />
        </s.ListItems>
      ))}
    </s.List>
  );
};
