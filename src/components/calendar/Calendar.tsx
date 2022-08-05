import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { yearArray } from '@constants/day';
import { Month } from '@components/calendar';
import setDefaultDate from '@utils/setDefaultDate';
import disabledDate from '@utils/disabledDate';
import getDate from '@utils/getDate';
import { ISearchData } from '@type/search';

interface ICalendarProps {
  page: number;
  searchData: ISearchData;
  handleModal: (key: string, value: boolean) => void;
  setSearchData: React.Dispatch<React.SetStateAction<ISearchData>>;
}

function Calendar({
  page,
  handleModal,
  searchData,
  setSearchData,
}: ICalendarProps) {
  const dateRef = useRef<{ [key: string]: HTMLDivElement }>({});

  const { year, month } = getDate();

  useEffect(() => {
    setDefaultDate(dateRef);
    disabledDate(dateRef);
  }, []);

  return (
    <CalendarContainer>
      <MonthWrap>
        {yearArray.map(index => (
          <Month
            key={index}
            page={page}
            dateRef={dateRef}
            handleModal={handleModal}
            searchData={searchData}
            setSearchData={setSearchData}
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
