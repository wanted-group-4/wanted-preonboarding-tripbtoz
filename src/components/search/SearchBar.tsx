import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SearchDate from '@components/search/SearchDate';
import SearchCount from '@components/search/SearchCount';
import useWindowDimensions from '@hooks/useWindowDimensions';
import theme from '@styles/theme';
import { CalendarModal } from '@components/calendar';
import { ISearchData } from '@type/search';

function SearchBar() {
  const { width } = useWindowDimensions();
  const [isWebWidth, setIsWebWidth] = useState(true);

  const [isOpenModal, setIsOpenModal] = useState<{ [key: string]: boolean }>({
    calendar: false,
    occupancy: false,
  });

  const [searchData, setSearchData] = useState<ISearchData>({
    calendar: { checkIn: '', checkOut: '' },
    occupancy: { adult: 0, kid: 0 },
  });

  const handleModal = (key: string, value: boolean) => {
    if (isWebWidth) {
      if (key === 'focus') {
        return setIsOpenModal(() => ({ calendar: false, occupancy: false }));
      }
      if (key === 'next')
        return setIsOpenModal(() => ({ calendar: false, occpancy: true }));
      setIsOpenModal(isOpenModal => ({ ...isOpenModal, [key]: value }));
    }
    if (!isWebWidth) {
      if (key === 'next') return;
      setIsOpenModal(isOpenModal => ({ ...isOpenModal, [key]: value }));
      if (value) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    if (width <= +theme.size.middle.slice(0, -2)) {
      setIsWebWidth(false);
    } else setIsWebWidth(true);
  }, [width]);

  return (
    <SearchBarContainer>
      <SearchDate
        isWeb={isWebWidth}
        handleModal={handleModal}
        searchData={searchData}
      />
      <CalendarModal
        isOpenModal={isOpenModal}
        handleModal={handleModal}
        searchData={searchData}
        setSearchData={setSearchData}
      />
      <SearchCount
        isWeb={isWebWidth}
        handleModal={handleModal}
        searchData={searchData}
      />
    </SearchBarContainer>
  );
}

export default SearchBar;

const SearchBarContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey_03};
  border-radius: 4px;
  @media ${({ theme }) => theme.deviceSize.tablet} {
    width: 100%;
    display: block;
    border: none;
  }
  @media ${({ theme }) => theme.deviceSize.mobile} {
    min-width: 300px; // temp
    display: block;
    border: none;
  }
`;
