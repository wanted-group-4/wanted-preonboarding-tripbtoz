import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

function CalendarHeader() {
  return (
    <MobileCalendarHeaderContainer>
      <Title>일정 선택</Title>
      <CloseButton>
        <CloseIcon />
      </CloseButton>
    </MobileCalendarHeaderContainer>
  );
}

export default CalendarHeader;

const MobileCalendarHeaderContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 120;
  width: 100%;
  height: 17.5vw;
  top: 0;
  left: 0;
  padding: 6vw 0px;
  border-bottom: 1px solid #ccc;
  background: #fff;
  @media ${({ theme }) => theme.deviceSize.middle} {
    display: block;
  }
`;
const Title = styled.h2`
  font-size: 5vw;
  font-weight: 700;
  text-align: center;
`;
const CloseButton = styled.button`
  position: absolute;
  right: 6vw;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
`;

const CloseIcon = styled(MdClose)`
  min-width: 20px;
  min-height: 20px;
  width: 6.5vw;
  height: 6.5vw;
`;
