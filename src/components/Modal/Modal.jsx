import { Component } from 'react';
import * as s from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <s.Overlay>
        <s.Modal>{this.props.children}</s.Modal>
      </s.Overlay>
    );
  }
}
