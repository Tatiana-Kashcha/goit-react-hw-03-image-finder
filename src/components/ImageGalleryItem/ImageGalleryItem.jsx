export const ImageGalleryItem = ({ gallery: { id, normalUrl, largeURL } }) => {
  return (
    <>
      <s.ListItems key={id}>
        <img src={normalUrl} alt="" />
      </s.ListItems>
    </>
  );
};
