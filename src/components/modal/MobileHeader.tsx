import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

function MobileHeader() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const exit = () => {
    document.body.style.overflow = 'unset';
  };
  return (
    <Container>
      <Text>인원 및 객실</Text>
      <CloseIconDiv onClick={exit}>
        <Icon />
      </CloseIconDiv>
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
const CloseIconDiv = styled.button`
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
