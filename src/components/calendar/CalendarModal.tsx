import React, { useState } from 'react';
import styled from 'styled-components';

import {
  Calendar,
  CalendarHeader,
  CalendarMoveButton,
} from '@components/calendar';
import { ISearchData } from '@type/search';

interface ICalendarModal {
  isOpenModal: { [key: string]: boolean };
  handleModal: (key: string, value: boolean) => void;
  searchData: ISearchData;
  setSearchData: React.Dispatch<React.SetStateAction<ISearchData>>;
}

function CalendarModal({
  isOpenModal,
  handleModal,
  searchData,
  setSearchData,
}: ICalendarModal) {
  const startMonth = new Date().getMonth();
  const [page, setPage] = useState<number>(startMonth);

  const handlefocusOut = e => {
    if (e.target.id === 'background') handleModal('focus', false);
  };

  return (
    <Background
      id="background"
      isOpenModal={isOpenModal.calendar}
      onClick={handlefocusOut}
    >
      <CalendarModalContainer>
        <CalendarHeader handleModal={handleModal} />
        <CalendarMoveButton page={page} setPage={setPage} />
        <Calendar
          page={page}
          handleModal={handleModal}
          searchData={searchData}
          setSearchData={setSearchData}
        />
        <ButtonWrap>
          <Button>적용</Button>
        </ButtonWrap>
      </CalendarModalContainer>
    </Background>
  );
}

export default CalendarModal;

const Background = styled.div<{ isOpenModal: boolean }>`
  display: ${({ isOpenModal }) => (isOpenModal ? 'block' : 'none')};
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const CalendarModalContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 760px;
  height: 420px;
  top: 210px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  @media ${({ theme }) => theme.deviceSize.middle} {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    transform: none;
    box-shadow: none;
    border-radius: none;
    padding: 0;
    overflow-y: scroll;
    overscroll-behavior: contain;
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
