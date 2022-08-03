import React, { useState } from 'react';
import styled from 'styled-components';
import { format, differenceInDays } from 'date-fns';
import { AiOutlineCalendar } from 'react-icons/ai';

import IconWrapper from '@components/wrappers/IconWrapper';
import BarWrapper from '@components/wrappers/BarWrapper';
import KeyWordContainer from '@src/components/common/KeyWordContainer';
import { IStyledProps } from '@type/style';
import { ISearchInnerProps } from '@type/search';

function SearchDate({ isWeb }: ISearchInnerProps) {
  const [display, setDisplay] = useState(false);
  const [checkin, setCheckin] = useState('8월 1일'); // temp
  const [checkout, setCheckout] = useState('8월 2일'); // temp
  const [diff, setDiff] = useState(1); // default value 확인

  const formatStringToDate = (date: string) => {
    const [year, month, day] = [
      +date.substring(0, 4),
      +date.substring(4, 6),
      +date.substring(6),
    ];
    return new Date(year, month, day);
  };
  const openCalendar = () => {
    setDisplay(() => true);
  };
  const handleCheckin = (date: Date) => {
    const newDate = format(date, 'M월 d일');
    setCheckin(() => newDate);
  };
  const handleCheckout = (date: Date) => {
    const newDate = format(date, 'M월 d일');
    setCheckout(() => newDate);
  };
  const handleDateDiff = (startDate: Date, endDate: Date) => {
    const diff = differenceInDays(startDate, endDate);
    setDiff(() => diff);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const checkinDate = formatStringToDate('20220720');
    const checkoutDate = formatStringToDate('20220801');
    handleCheckin(checkinDate); // temp
    handleCheckout(checkoutDate); // temp
    handleDateDiff(checkoutDate, checkinDate);
    setDisplay(() => false);
  };

  return (
    <SearchDateContainer onClick={openCalendar}>
      <BarWrapper height="64px">
        <IconWrapper icon={<AiOutlineCalendar />} />
        <KeyWordContainer content="체크인 :" color="grey_03" />
        <KeyWordContainer content={checkin} />
        <KeyWordContainer content="|" color="grey_03" />
        {isWeb && (
          <>
            <KeyWordContainer content={`${diff}박`} />
            <KeyWordContainer color="grey_03" content="|" />
          </>
        )}
        <KeyWordContainer content="체크아웃 :" color="grey_03" />
        <KeyWordContainer content={checkout} />
        {display && (
          <TempCalender height="64px" onClick={handleSubmit}>
            캘린더 컴포넌트입니다.
          </TempCalender>
        )}
      </BarWrapper>
    </SearchDateContainer>
  );
}

export default SearchDate;

const SearchDateContainer = styled.div`
  cursor: pointer;
  padding: 0 16px;
  width: 60%;
  border-right: 1px solid ${({ theme }) => theme.color.grey_03};
  @media ${({ theme }) => theme.deviceSize.tablet} {
    margin-bottom: 8px;
    padding: 0 48px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.grey_03};
    border-radius: 4px;
  }
  @media ${({ theme }) => theme.deviceSize.mobile} {
    padding: 0 12px;
  }
`;

const TempCalender = styled.div<IStyledProps>`
  margin-top: 12px;
  width: ${({ theme }) => theme.size.tablet}; // 수정
  height: 400px;
  position: absolute;
  top: ${props => props?.height};
  left: 0;
  background-color: ${({ theme }) => theme.color.grey_01};
`;
