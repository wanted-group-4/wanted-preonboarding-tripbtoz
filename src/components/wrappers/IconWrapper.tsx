import React from 'react';
import styled from 'styled-components';

interface IIconWrapperProps {
  icon: JSX.Element;
  color?: string;
}

function IconWrapper({ icon, color }: IIconWrapperProps) {
  return <IconContainer color={color}>{icon}</IconContainer>;
}

export default IconWrapper;

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: ${props => (props.color ? props.theme.color[props.color] : '#000')};
`;
