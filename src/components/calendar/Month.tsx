import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

import { Week, Dates } from '@components/calendar';
import { ISearchData } from '@type/search';

interface IMonthProps {
  dateRef: React.MutableRefObject<{
    [key: string]: HTMLDivElement;
  }>;
  handleModal: (key: string, value: boolean) => void;
  setSearchData: React.Dispatch<React.SetStateAction<ISearchData>>;
  searchData: ISearchData;
  year: number;
  month: number;
  page: number;
}

function Month({
  dateRef,
  handleModal,
  setSearchData,
  searchData,
  year,
  month,
  page,
}: IMonthProps) {
  const monthTitle = format(new Date(year, month), 'yyyy.MM');

  const handleDate = (e: any) => {
    if (e.target.nodeName === 'DIV') return;

    const target = e.target;
    const start = searchData.calendar.checkIn.replace(/-/g, '');
    const end = searchData.calendar.checkOut.replace(/-/g, '');

    const [year, month] = e.currentTarget.childNodes[0].innerHTML.split('.');
    const day = e.target.innerHTML;
    const value = format(new Date(year, month - 1, day), 'yyyy-MM-dd');
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
      setSearchData(() => ({
        ...searchData,
        calendar: { checkIn: value, checkOut: '' },
      }));
    }
    if (current > start && end === '') {
      for (let i = +start; i < +current; i++) {
        dateRef.current[String(i)]?.classList.add('selected');
      }
      dateRef.current[start]?.classList.remove('start_only');
      dateRef.current[start]?.classList.add('start');
      dateRef.current[current]?.classList.add('end');
      setSearchData(() => ({
        ...searchData,
        calendar: { checkIn: searchData.calendar.checkIn, checkOut: value },
      }));
      handleModal('next', false);
    }
    if (current < start) {
      dateRef.current[start]?.classList.remove('start_only');
      dateRef.current[current]?.classList.add('start_only');
      setSearchData(() => ({
        ...searchData,
        calendar: { checkIn: value, checkOut: '' },
      }));
    }
  };

  return (
    <MonthContainer onClick={handleDate} page={page} month={month}>
      <Title>{monthTitle}</Title>
      <Week />
      <Dates year={year} month={month} dateRef={dateRef} />
    </MonthContainer>
  );
}

export default Month;

const MonthContainer = styled.div<{ page: number; month: number }>`
  margin-right: 30px;
  @media ${({ theme }) => theme.deviceSize.middle} {
    margin-right: 0;
  }
  @media (min-width: 820px) {
    order: ${({ page, month }) => {
      if (page === month) return 1;
      if (page + 1 === month) return 2;
      return 3;
    }};
  }
`;
const Title = styled.div`
  margin-bottom: 30px;
  font-size: 17px;
  font-weight: 700;
  @media ${({ theme }) => theme.deviceSize.middle} {
    font-size: 4.5vw;
    margin: 7vw 0 9.5vw;
  }
`;
