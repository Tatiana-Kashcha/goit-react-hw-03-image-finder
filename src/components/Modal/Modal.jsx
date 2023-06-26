import { Component } from 'react';
import { ReactComponent as IconClose } from '../icons/x-close.svg';
import * as s from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <s.Overlay>
        <s.Modal>
          <s.CloseButton type="button" onClick={this.props.closeModal}>
            <IconClose width="30" heigth="30" />
            <s.ButtonLabel>Close</s.ButtonLabel>
          </s.CloseButton>
          <img src={this.props.currentImage} alt={this.props.tags} />
        </s.Modal>
      </s.Overlay>
    );
  }
}
