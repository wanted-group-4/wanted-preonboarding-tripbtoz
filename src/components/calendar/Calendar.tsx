import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { yearArray } from '@constants/day';
import { Month } from '@components/calendar';
import setDefaultDate from '@utils/setDefaultDate';
import disabledDate from '@utils/disabledDate';

interface ICalendarProps {
  page: number;
}

function Calendar({ page }: ICalendarProps) {
  const checkRef = useRef<{ [key: string]: string }>({});
  const dateRef = useRef<{ [key: string]: HTMLDivElement }>({});

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  useEffect(() => {
    setDefaultDate(dateRef, checkRef);
    disabledDate(dateRef);
  }, []);

  return (
    <CalendarContainer>
      <MonthWrap>
        {yearArray.map(index => (
          <Month
            key={index}
            page={page}
            checkRef={checkRef}
            dateRef={dateRef}
            year={year}
            month={month + index}
          />
        ))}
      </MonthWrap>
    </CalendarContainer>
  );
}

export default Calendar;

const CalendarContainer = styled.div`
  text-align: center;
  width: 100%;
`;

const MonthWrap = styled.div`
  margin: 35px 50px 0;
  width: 660px;
  display: flex;
  overflow: hidden;
  @media ${({ theme }) => theme.deviceSize.middle} {
    display: block;
    width: 100%;
    padding: 2vw;
    margin: 17.5vw 0;
  }
  @media (min-width: 820px) {
    height: 370px;
  }
`;
