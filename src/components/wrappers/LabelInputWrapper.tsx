import React from 'react';
import styled from 'styled-components';

import { IStyledProps } from '@type/style';

interface ILabelInputProps {
  label: string;
  value: string | number;
  width: string;
  visible?: boolean;
}

function LabelInputWrapper({
  label,
  value,
  width,
  visible = true,
}: ILabelInputProps) {
  return (
    <ItemContainer width={width}>
      {visible && (
        <>
          {label && <LabelContainer>{label} :</LabelContainer>}
          <InputContainer>
            <input readOnly type="text" value={value} />
          </InputContainer>
        </>
      )}
    </ItemContainer>
  );
}

export default LabelInputWrapper;

const ItemContainer = styled.div<IStyledProps>`
  width: ${props => props.width};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`;

const LabelContainer = styled.label`
  width: 100%;
  color: ${({ theme }) => theme.color.grey_03};
`;

const InputContainer = styled.span`
  input {
    width: 100%;
    text-align: center;
  }
`;
