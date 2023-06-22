import * as s from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  gallery: { id, webformatURL, tags, largeImageURL },
}) => {
  return (
    <>
      <s.ListItems key={id}>
        <img src={webformatURL} alt={tags} />
      </s.ListItems>
    </>
  );
};
