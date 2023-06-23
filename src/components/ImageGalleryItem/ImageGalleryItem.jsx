import * as s from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  gallery: { webformatURL, tags, largeImageURL },
}) => {
  return (
    <>
      <s.Img src={webformatURL} alt={tags} />
    </>
  );
};
