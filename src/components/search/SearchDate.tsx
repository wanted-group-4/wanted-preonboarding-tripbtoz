import React, { useState } from 'react';
import styled from 'styled-components';
import { format, differenceInDays } from 'date-fns';
import { AiOutlineCalendar } from 'react-icons/ai';

import LabelInputWrapper from '@components/wrappers/LabelInputWrapper';
import IconWrapper from '@components/wrappers/IconWrapper';
import BarWrapper from '@components/wrappers/BarWrapper';
import KeyWordContainer from '@src/components/common/KeyWordContainer';
import { IStyledProps } from '@type/style';
import { CalendarModal } from '@components/calendar';

function SearchDate() {
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
        <LabelInputWrapper width="32%" label="체크인" value={checkin} />
        <KeyWordContainer content="|" color="grey_03" />
        <KeyWordContainer content={`${diff}박`} />
        <KeyWordContainer color="grey_03" content="|" />
        <LabelInputWrapper width="36%" label="체크아웃" value={checkout} />
        <CalendarModal display={display} />
      </BarWrapper>
    </SearchDateContainer>
  );
}

export default SearchDate;

const SearchDateContainer = styled.div`
  cursor: pointer;
  padding: 0 16px;
  width: 50%;
  position: relative;
  border-right: 1px solid ${({ theme }) => theme.color.grey_03};
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
