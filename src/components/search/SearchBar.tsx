import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

import SearchDate from '@components/search/SearchDate';
import SearchCount from '@components/search/SearchCount';
import { CalendarModal } from '@components/calendar';
import GuestReservation from '@components/modal/GuestReservation';
import IconWrapper from '@wrappers/IconWrapper';
import useWindowDimensions from '@hooks/useWindowDimensions';
import useNavigateSearch from '@hooks/useNavigateSearch';
import { ISearchData } from '@type/search';
import theme from '@styles/theme';

function SearchBar() {
  const { width } = useWindowDimensions();
  const navigateSearch = useNavigateSearch();
  const [isWebWidth, setIsWebWidth] = useState<boolean>(true);

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
        return setIsOpenModal(() => ({ calendar: false, occupancy: true }));
      setIsOpenModal(isOpenModal => ({ ...isOpenModal, [key]: value }));
    }
    if (!isWebWidth) {
      if (key === 'next') return;
      setIsOpenModal(isOpenModal => ({ ...isOpenModal, [key]: value }));
      if (value) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = '';
    }
  };

  const handleSearch = () => {
    const { checkIn, checkOut } = searchData.calendar;
    const { adult, kid } = searchData.occupancy;
    if (!adult && !kid) return navigateSearch('/', { checkIn, checkOut });
    if (!checkIn || !checkOut) return navigateSearch('/', { adult, kid });
    navigateSearch('/', { checkIn, checkOut, adult, kid });
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
      <GuestReservation
        isOpenModal={isOpenModal}
        handleModal={handleModal}
        searchData={searchData}
        setSearchData={setSearchData}
      />
      {isWebWidth && (
        <SearchButtonWrapper onClick={handleSearch}>
          <IconWrapper icon={<AiOutlineSearch />} color="pink_02" />
        </SearchButtonWrapper>
      )}
    </SearchBarContainer>
  );
}

export default SearchBar;

const SearchBarContainer = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey_03};
  border-radius: 4px;
  @media ${({ theme }) => theme.deviceSize.middle} {
    width: 100%;
    display: block;
    border: none;
  }
  @media ${({ theme }) => theme.deviceSize.mobile} {
    min-width: 300px;
    display: block;
    border: none;
  }
`;

const SearchButtonWrapper = styled.button`
  background-color: transparent;
`;
