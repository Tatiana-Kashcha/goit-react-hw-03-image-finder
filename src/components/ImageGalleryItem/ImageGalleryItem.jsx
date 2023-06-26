import * as s from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  gallery: { webformatURL, tags, largeImageURL, showModal },
}) => {
  return (
    <>
      <s.Img
        src={webformatURL}
        alt={tags}
        // onClick={() => {
        //   showModal(largeImageURL, tags);
        // }}
      />
    </>
  );
};
