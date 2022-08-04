import React from 'react';
import styled from 'styled-components';
import { differenceInDays } from 'date-fns';
import { AiOutlineCalendar } from 'react-icons/ai';

import IconWrapper from '@components/wrappers/IconWrapper';
import BarWrapper from '@components/wrappers/BarWrapper';
import KeyWordContainer from '@components/common/KeyWordContainer';
import { ISearchInnerProps } from '@type/search';

function SearchDate({ isWeb, handleModal, searchData }: ISearchInnerProps) {
  const handleDateDiff = (period: { [key: string]: string | number }) => {
    const { checkIn, checkOut } = period;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = differenceInDays(end, start);
    return isNaN(diff) ? 1 : diff;
  };

  const diff = handleDateDiff(searchData.calendar);

  const changeFormat = (value: string) => {
    if (value === '') return '날짜입력';
    const [yaer, month, day] = value.split('-');
    return `${month}월 ${day}일`;
  };

  return (
    <SearchDateContainer onClick={() => handleModal('calendar', true)}>
      <BarWrapper height="64px">
        <IconWrapper icon={<AiOutlineCalendar />} />
        <KeyWordContainer content="체크인 :" color="grey_03" />
        <KeyWordContainer content={changeFormat(searchData.calendar.checkIn)} />
        <KeyWordContainer content="|" color="grey_03" />
        {isWeb && (
          <>
            <KeyWordContainer content={`${diff}박`} />
            <KeyWordContainer color="grey_03" content="|" />
          </>
        )}
        <KeyWordContainer content="체크아웃 :" color="grey_03" />
        <KeyWordContainer
          content={changeFormat(searchData.calendar.checkOut)}
        />
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
