import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

import Week from '@components/calendar/Week';
import Dates from '@components/calendar/Dates';

interface IMonthProps {
  checkRef: React.MutableRefObject<{
    [key: string]: string;
  }>;
  dateRef: React.MutableRefObject<{
    [key: string]: HTMLDivElement | null;
  }>;
  year: number;
  month: number;
}

const Month = ({ checkRef, dateRef, year, month }: IMonthProps) => {
  const monthTitle = format(new Date(year, month), 'yyyy.MM');

  const handleDate = (e: any) => {
    if (e.target.nodeName === 'DIV') return;

    const target = e.target;
    const start = checkRef.current.checkIn;
    const end = checkRef.current.checkOut;

    const [year, month] = e.currentTarget.childNodes[0].innerHTML.split('.');
    const day = e.target.innerHTML;
    const current = format(new Date(year, month - 1, day), 'yyyyMMdd');

    if (end !== '') {
      const keys = Object.keys(dateRef.current);
      keys.map(key =>
        dateRef.current[key]?.classList.remove(
          'start',
          'end',
          'selected',
          'start_only',
        ),
      );
      target.parentElement.classList.add('start_only');
      checkRef.current = { checkIn: `${current}`, checkOut: '' };
    }
    if (current > start && end === '') {
      for (let i = +start; i < +current; i++) {
        dateRef.current[String(i)]?.classList.add('selected');
      }
      dateRef.current[start]?.classList.remove('start_only');
      dateRef.current[start]?.classList.add('start');
      dateRef.current[current]?.classList.add('end');
      checkRef.current.checkOut = current;
    }
    if (current < start) {
      dateRef.current[start]?.classList.remove('start_only');
      dateRef.current[current]?.classList.add('start_only');
      checkRef.current = { checkIn: `${current}`, checkOut: '' };
    }
  };

  return (
    <MonthContainer onClick={handleDate}>
      <Title>{monthTitle}</Title>
      <Week />
      <Dates year={year} month={month} dateRef={dateRef} />
    </MonthContainer>
  );
};

export default Month;

const MonthContainer = styled.div`
  width: 60vw;
`;
const Title = styled.div`
  margin: 4.5vw 0;
  font-size: 2.5vw;
  font-weight: 700;
`;
