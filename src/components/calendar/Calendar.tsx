import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { yearArray } from '@constants/day';
import { disabledDate } from '@utils/disabledDate';
import setDefaultDate from '@utils/setDefaultDate';
import Month from '@components/calendar/Month';

const Calendar = () => {
  const checkRef = useRef<{ [key: string]: string }>({});
  const dateRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  useEffect(() => {
    setDefaultDate(dateRef, checkRef);
    disabledDate(dateRef);
  }, []);

  return (
    <CalendarContainer>
      {yearArray.map(index => (
        <Month
          key={index}
          checkRef={checkRef}
          dateRef={dateRef}
          year={year}
          month={month + index}
        />
      ))}
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div``;
