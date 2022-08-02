import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';

import LabelInputWrapper from '@components/wrappers/LabelInputWrapper';
import IconWrapper from '@components/wrappers/IconWrapper';
import BarWrapper from '@components/wrappers/BarWrapper';
import KeyWordContainer from '@src/components/common/KeyWordContainer';
import { IStyledProps } from '@type/style';

function SearchCount() {
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
        <LabelInputWrapper width="36%" label="성인" value={count.adult} />
        <KeyWordContainer color="grey_03" content="|" />
        <LabelInputWrapper width="36%" label="어린이" value={count.kid} />
        <IconWrapper icon={<AiOutlineSearch />} color="pink_02" />
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
  width: 50%;
  position: relative;
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
