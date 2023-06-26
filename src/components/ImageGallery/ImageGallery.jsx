import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import * as s from './ImageGallery.styled';

export const ImageGallery = ({ data, showModal }) => {
  return (
    <s.List>
      {data.map(gallery => (
        <s.ListItems
          key={gallery.id}
          onClick={() => {
            showModal();
          }}
        >
          <ImageGalleryItem
            gallery={gallery}
            // onClick={() => {
            //   showModal(gallery.largeImageURL, gallery.tags);
            // }}
          />
        </s.ListItems>
      ))}
    </s.List>
  );
};
