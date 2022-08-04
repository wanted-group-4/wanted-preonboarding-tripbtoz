import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

function MobileHeader() {
  return (
    <Container>
      <Text>인원 및 객실</Text>
      <CloseIconDiv>
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
    justify-content: flex-end;
    align-items: center;
    font-size: 22px;
    font-weight: 600;
    height: 50px;
  }
`;
const Text = styled.div`
  text-align: end;
  flex: 1 1 auto;
`;
const CloseIconDiv = styled.div`
  text-align: end;
  width: 50px;
  margin-right: 20px;
  flex: 0.8 1 auto;
`;

const Icon = styled(MdClose)`
  width: 30px;
  height: 30px;
`;
