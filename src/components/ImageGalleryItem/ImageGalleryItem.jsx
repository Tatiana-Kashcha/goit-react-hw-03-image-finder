export const ImageGalleryItem = ({
  gallery: { id, webformatURL, largeImageURL },
}) => {
  return (
    <>
      <s.ListItems key={id}>
        <img src={webformatURL} alt="" />
      </s.ListItems>
    </>
  );
};
