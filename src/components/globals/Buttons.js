import styled from 'styled-components';
import {
  setColor,
  setRem,
  setLetterSpacing,
  setFont,
  setBorder,
  setTransition,
} from '../../styles';

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFont.main};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({ color: setColor.primaryColor })};
  ${setLetterSpacing(3)};
  ${setTransition()};
  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
  ${props =>
    `margin: ${props.mTop || 0} ${props.mRight || 0} ${props.mBottom || 0} ${
      props.mLeft || 0
    }}`};
  text-decoration: none;
`;
