import React from 'react';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';

import IconWrapper from '@components/wrappers/IconWrapper';
import BarWrapper from '@components/wrappers/BarWrapper';
import KeyWordContainer from '@components/common/KeyWordContainer';
import { ISearchInnerProps } from '@type/search';

function SearchCount({ handleModal, searchData }: ISearchInnerProps) {
  return (
    <SearchCountContainer onClick={() => handleModal('occupancy', true)}>
      <BarWrapper height="64px">
        <IconWrapper icon={<AiOutlineUser />} />
        <KeyWordContainer content="성인 :" color="grey_03" />
        <KeyWordContainer content={`${searchData.occupancy.adult}명`} />
        <KeyWordContainer content="|" color="grey_03" />
        <KeyWordContainer content="어린이 :" color="grey_03" />
        <KeyWordContainer content={`${searchData.occupancy.kid}명`} />
      </BarWrapper>
    </SearchCountContainer>
  );
}

export default SearchCount;

const SearchCountContainer = styled.div`
  cursor: pointer;
  padding: 0 16px;
  width: 40%;
  @media ${({ theme }) => theme.deviceSize.middlethe} {
    padding: 0 48px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.grey_03};
    border-radius: 4px;
  }
  @media ${({ theme }) => theme.deviceSize.mobile} {
    padding: 0 12px;
  }
`;
