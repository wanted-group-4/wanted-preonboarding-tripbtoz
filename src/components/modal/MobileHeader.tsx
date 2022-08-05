import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

interface ICalendarHeaderProps {
  handleModal: (key: string, value: boolean) => void;
}

function MobileHeader({ handleModal }: ICalendarHeaderProps) {
  return (
    <Container>
      <Text>인원 및 객실</Text>
      <CloseIconButton onClick={() => handleModal('occupancy', false)}>
        <Icon />
      </CloseIconButton>
    </Container>
  );
}
export default MobileHeader;

const Container = styled.div`
  display: none;
  @media ${({ theme }) => theme.deviceSize.middle} {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5vw;
    font-weight: 600;
    height: 17.4vw;
    width: 100%;
    position: relative;
  }
`;
const Text = styled.div`
  text-align: center;
`;
const CloseIconButton = styled.button`
  position: absolute;
  right: 6vw;
  background: transparent;
`;

const Icon = styled(MdClose)`
  min-width: 20px;
  min-height: 20px;
  width: 6.5vw;
  height: 6.5vw;
`;
