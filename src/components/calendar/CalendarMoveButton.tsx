import React from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface CalendarMoveButtonProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const CalendarMoveButton = ({ page, setPage }: CalendarMoveButtonProps) => {
  const startMonth = new Date().getMonth();
  const endMonth = startMonth + 12;

  const handleMoveCalendar = (direction: number) => {
    setPage(page => page + direction);
  };

  return (
    <CalendarMoveButtonContainer>
      <LeftButton
        onClick={() => handleMoveCalendar(-1)}
        disabled={page === startMonth}
      >
        <MdOutlineKeyboardArrowLeft />
      </LeftButton>
      <RightButton
        onClick={() => handleMoveCalendar(1)}
        disabled={page === endMonth - 1}
      >
        <MdOutlineKeyboardArrowRight />
      </RightButton>
    </CalendarMoveButtonContainer>
  );
};

export default CalendarMoveButton;

const CalendarMoveButtonContainer = styled.div`
  position: absolute;
  z-index: 110;
  display: flex;
  justify-content: space-between;
  width: 630px;
  top: 30px;
  left: 65px;
  svg {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.color.grey_03};
    cursor: pointer;
  }
`;

const LeftButton = styled.button<{ disabled: boolean }>`
  background: transparent;
  svg {
    color: ${({ disabled, theme }) => disabled && theme.color.grey_01};
  }
`;
const RightButton = styled.button`
  background: transparent;
  svg {
    color: ${({ disabled, theme }) => disabled && theme.color.grey_01};
  }
`;
