import { ReactComponent as IconClose } from '../icons/x-close.svg';
import * as s from './Modal.styled';

export const Modal = ({ closeModal, largeImageURL, tags }) => {
  return (
    <s.Overlay>
      <s.Modal>
        <button type="button" onClick={closeModal}>
          <IconClose width="20" heigth="20" />
          <s.ButtonLabel>Close</s.ButtonLabel>
        </button>
        <img src={largeImageURL} alt={tags} />
      </s.Modal>
    </s.Overlay>
  );
};
