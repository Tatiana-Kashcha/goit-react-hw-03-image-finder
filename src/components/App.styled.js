import styled from 'styled-components';

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  justify-content: center;
  text-align: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  outline: none;
  fill: #ffffff;
`;

export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;