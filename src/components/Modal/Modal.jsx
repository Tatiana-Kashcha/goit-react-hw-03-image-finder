// import { Component } from 'react';
import { ReactComponent as IconClose } from '../icons/x-close.svg';
import * as s from './Modal.styled';

// export default class Modal extends Component {
//   componentDidMount() {}

//   componentDidUpdate() {}

//   render() {
//     // return (
//     //   <s.Overlay>
//     //     <s.Modal>{this.props.children}</s.Modal>
//     //   </s.Overlay>
//     // );

//     return (
//       <s.Overlay>
//         <s.Modal>
//           <s.CloseButton type="button" onClick={closeModal()}>
//             <IconClose width="20" heigth="20" />
//             <s.ButtonLabel>Close</s.ButtonLabel>
//           </s.CloseButton>
//           {/* <img src={currentImage} alt={tags} /> */}
//         </s.Modal>
//       </s.Overlay>
//     );
//   }
// }
export const Modal = ({ currentImage, tags, closeModal }) => {
  return (
    <s.Overlay>
      <s.Modal>
        <s.CloseButton type="button" onClick={closeModal}>
          <IconClose width="30" heigth="30" />
          <s.ButtonLabel>Close</s.ButtonLabel>
        </s.CloseButton>
        <img src={currentImage} alt={tags} />
      </s.Modal>
    </s.Overlay>
  );
};
