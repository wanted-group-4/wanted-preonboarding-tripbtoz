import React from 'react';
import styled from 'styled-components';

function KeyWordContainer({
  content,
  visible = true,
  color,
}: {
  content: string;
  visible?: boolean;
  color?: string;
}) {
  return visible ? <LineWrapper color={color}>{content}</LineWrapper> : <></>;
}

export default KeyWordContainer;

const LineWrapper = styled.span`
  display: flex;
  align-items: center;
  color: ${props => (props.color ? props.theme.color[props.color] : '#000')};
`;
