import React from 'react';
import styled from 'styled-components';

import SearchDate from '@components/search/SearchDate';
import SearchCount from '@components/search/SearchCount';

function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchDate />
      {/* modal */}
      <SearchCount />
      {/* modal */}
    </SearchBarContainer>
  );
}

export default SearchBar;

const SearchBarContainer = styled.div`
  width: ${({ theme }) => theme.size.tablet};
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey_03};
  border-radius: 4px;
`;
