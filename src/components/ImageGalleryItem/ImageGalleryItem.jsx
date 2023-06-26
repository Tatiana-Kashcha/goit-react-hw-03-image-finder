import * as s from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <>
      <s.Img src={webformatURL} alt={tags} />
    </>
  );
};
