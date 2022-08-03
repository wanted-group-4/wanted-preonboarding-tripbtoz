import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SearchDate from '@components/search/SearchDate';
import SearchCount from '@components/search/SearchCount';
import useWindowDimensions from '@hooks/useWindowDimensions';
import theme from '@src/styles/theme';

function SearchBar() {
  const { width } = useWindowDimensions();
  const [isWebWidth, setIsWebWidth] = useState(true);

  useEffect(() => {
    if (width <= +theme.size.tablet.slice(0, -2)) {
      setIsWebWidth(false);
    } else setIsWebWidth(true);
  }, [width]);

  return (
    <SearchBarContainer>
      <SearchDate isWeb={isWebWidth} />
      <SearchCount isWeb={isWebWidth} />
    </SearchBarContainer>
  );
}

export default SearchBar;

const SearchBarContainer = styled.div`
  margin: 24px auto;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey_03};
  border-radius: 4px;
  @media ${({ theme }) => theme.deviceSize.tablet} {
    width: 88vw;
    display: block;
    border: none;
  }
  @media ${({ theme }) => theme.deviceSize.mobile} {
    min-width: 360px;
    display: block;
    border: none;
  }
`;
