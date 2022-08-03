import React, { useState } from 'react';
import styled from 'styled-components';

import {
  Calendar,
  CalendarHeader,
  CalendarMoveButton,
} from '@components/calendar';

interface ICalendarModal {
  display: boolean;
}

function CalendarModal({ display }: ICalendarModal) {
  const startMonth = new Date().getMonth();
  const [page, setPage] = useState<number>(startMonth);

  return (
    <CalendarModalContainer display={display}>
      <CalendarHeader />
      <CalendarMoveButton page={page} setPage={setPage} />
      <Calendar page={page} />
      <ButtonWrap>
        <Button>적용</Button>
      </ButtonWrap>
    </CalendarModalContainer>
  );
}

export default CalendarModal;

const CalendarModalContainer = styled.div<{ display: boolean }>`
  display: ${({ display }) => (display ? 'block' : 'none')};
  position: absolute;
  z-index: 100;
  width: 760px;
  height: 420px;
  background: #fff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  @media ${({ theme }) => theme.deviceSize.middle} {
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    box-shadow: none;
    border-radius: none;
    padding: 0;
    overflow-y: scroll;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ButtonWrap = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 19vw;
  bottom: 0;
  left: 0;
  padding: 4vw 6vw;
  border-top: 1px solid #ccc;
  background: #fff;
  @media ${({ theme }) => theme.deviceSize.middle} {
    display: block;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 11vw;
  border-radius: 1vw;
  font-size: 5vw;
  font-weight: 700;
  color: #fff;
  background: ${({ theme }) => theme.color.pink_02};
`;
