import React, { useState } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { AiOutlineCalendar } from 'react-icons/ai';

import LabelInputWrapper from '@components/wrappers/LabelInputWrapper';
import IconWrapper from '@components/wrappers/IconWrapper';

interface StyledProps {
  height: string;
}

function SearchDate() {
  const [display, setDisplay] = useState(false);
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const formatDateToSearch = (date: Date) => {
    return format(date, 'M월 d일');
  };
  const openCalendar = () => {
    setDisplay(() => true);
  };
  const handleCheckin = (date: string) => {
    const newDate = formatDateToSearch(new Date(date));
    setCheckin(() => newDate);
  };
  const handleCheckout = (date: string) => {
    const newDate = formatDateToSearch(new Date(date));
    setCheckout(() => newDate);
  };

  return (
    <SearchDateContainer onClick={openCalendar}>
      <BarWrapper height="64px">
        <IconWrapper icon={<AiOutlineCalendar />} />
        <LabelInputWrapper label="체크인" value={checkin} />
        <LabelInputWrapper visible={true} label="" value="1박" />
        <LabelInputWrapper label="체크아웃" value={checkout} />
        {display && (
          <TempCalender height="64px">캘린더 컴포넌트입니다.</TempCalender>
        )}
      </BarWrapper>
    </SearchDateContainer>
  );
}

export default SearchDate;

const SearchDateContainer = styled.button`
  position: relative;
  background-color: transparent;
`;

const BarWrapper = styled.div<StyledProps>`
  position: relative;
  height: ${props => props?.height};
  display: flex;
`;

const TempCalender = styled.div<StyledProps>`
  margin-top: 12px;
  width: ${({ theme }) => theme.size.tablet}; // 수정
  height: 400px;
  position: absolute;
  top: ${props => props?.height};
  left: 0;
  background-color: ${({ theme }) => theme.color.grey_01};
`;
