import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';

import IconWrapper from '@wrappers/IconWrapper';
import BarWrapper from '@wrappers/BarWrapper';
import KeyWordContainer from '@src/components/common/KeyWordContainer';
import { IStyledProps } from '@type/style';
import { ISearchInnerProps } from '@type/search';

function SearchCount({ isWeb }: ISearchInnerProps) {
  const [display, setDisplay] = useState(false);
  const [count, setCount] = useState({ adult: 0, kid: 0 });

  const openCounter = () => {
    setDisplay(() => true);
  };
  const handleCount = () => {
    // update state after button click
    const [adult, kid] = [2, 2];
    setCount(prev => ({ ...prev, adult, kid }));
    setDisplay(() => false);
  };

  return (
    <SearchCountContainer onClick={openCounter}>
      <BarWrapper height="64px">
        <IconWrapper icon={<AiOutlineUser />} />
        <KeyWordContainer content="성인 :" color="grey_03" />
        <KeyWordContainer content={`${count.adult}명`} />
        <KeyWordContainer content="|" color="grey_03" />
        <KeyWordContainer content="어린이 :" color="grey_03" />
        <KeyWordContainer content={`${count.kid}명`} />
        {isWeb && <IconWrapper icon={<AiOutlineSearch />} color="pink_02" />}
        {display && (
          <TempCounter height="64px" onClick={handleCount}>
            인원수 세기
          </TempCounter>
        )}
      </BarWrapper>
    </SearchCountContainer>
  );
}

export default SearchCount;

const SearchCountContainer = styled.div`
  cursor: pointer;
  padding: 0 16px;
  width: 40%;
  @media ${({ theme }) => theme.deviceSize.tablet} {
    padding: 0 48px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.grey_03};
    border-radius: 4px;
  }
  @media ${({ theme }) => theme.deviceSize.mobile} {
    padding: 0 12px;
  }
`;

const TempCounter = styled.div<IStyledProps>`
  margin-top: 12px;
  position: absolute;
  top: ${props => props.height};
  left: 0;
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.color.grey_01};
`;
