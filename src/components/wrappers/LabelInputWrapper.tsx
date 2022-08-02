import React from 'react';
import styled from 'styled-components';

interface ILabelInputProps {
  label: string;
  value: string | number;
  visible?: boolean;
}

function LabelInputWrapper({ label, value, visible = true }: ILabelInputProps) {
  return (
    <ItemContainer>
      {visible && (
        <>
          {label && <LabelContainer>{label}</LabelContainer>}
          <InputContainer>
            <input readOnly type="text" value={value} />
          </InputContainer>
        </>
      )}
    </ItemContainer>
  );
}

export default LabelInputWrapper;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LabelContainer = styled.label`
  color: ${({ theme }) => theme.color.grey_03};
  &::after {
    content: ':';
  }
`;

const InputContainer = styled.span`
  width: 4vw;
  &::after {
    content: '|';
  }
`;
