import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

import SearchDate from '@components/search/SearchDate';
import SearchCount from '@components/search/SearchCount';
import { CalendarModal } from '@components/calendar';
import GuestReservation from '@components/modal/GuestReservation';
import IconWrapper from '@wrappers/IconWrapper';
import useWindowDimensions from '@hooks/useWindowDimensions';
import useNavigateSearch from '@hooks/useNavigateSearch';
import useLocationString from '@hooks/useLocationString';
import { ISearchData } from '@type/search';
import theme from '@styles/theme';

function SearchBar() {
  const { pathname } = useLocation();
  const locationQuery = useLocationString();
  const { width } = useWindowDimensions();
  const navigateSearch = useNavigateSearch();
  const [isWebWidth, setIsWebWidth] = useState<boolean>(true);

  const [isOpenModal, setIsOpenModal] = useState<{ [key: string]: boolean }>({
    calendar: false,
    occupancy: false,
  });

  const [searchData, setSearchData] = useState<ISearchData>({
    calendar: {
      checkIn: locationQuery.checkIn,
      checkOut: locationQuery.checkOut,
    },
    occupancy: {
      adult: locationQuery.adult ? +locationQuery.adult : 2,
      kid: locationQuery.kid ? +locationQuery.kid : 0,
    },
  });

  const handleModal = (key: string, value: boolean) => {
    if (isWebWidth) {
      if (key === 'focus') {
        return setIsOpenModal(() => ({ calendar: false, occupancy: false }));
      }
      if (key === 'next')
        return setIsOpenModal(() => ({ calendar: false, occupancy: true }));
    }
    if (!isWebWidth) {
      if (key === 'next') return;
      if (value) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = '';
    }

    setIsOpenModal(isOpenModal => ({ ...isOpenModal, [key]: value }));
  };

  const handleSearch = () => {
    const { checkIn, checkOut } = searchData.calendar;
    const { adult, kid } = searchData.occupancy;
    if (!adult && !kid) return navigateSearch('/', { checkIn, checkOut });
    if (!checkIn || !checkOut) return navigateSearch('/', { adult, kid });
    navigateSearch('/', { checkIn, checkOut, adult, kid });
    setIsOpenModal(() => ({ calendar: false, occupancy: false }));
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (width <= +theme.size.middle.slice(0, -2)) {
      setIsWebWidth(false);
      if (isOpenModal.calendar || isOpenModal.occupancy)
        document.body.style.overflow = 'hidden';
    } else {
      setIsWebWidth(true);
      if (isOpenModal.calendar || isOpenModal.occupancy)
        document.body.style.overflow = '';
    }
  }, [width]);

  return (
    <SearchBarContainer>
      <Position pathname={pathname}>
        <SearchWrap>
          <SearchDate
            isWeb={isWebWidth}
            handleModal={handleModal}
            searchData={searchData}
          />
          <SearchCount
            isWeb={isWebWidth}
            handleModal={handleModal}
            searchData={searchData}
          />
          {isWebWidth && <IconPosition />}
        </SearchWrap>
      </Position>
      {isWebWidth && (
        <SearchButtonWrapper onClick={handleSearch} pathname={pathname}>
          <IconWrapper icon={<AiOutlineSearch />} color="pink_02" />
        </SearchButtonWrapper>
      )}
      <CalendarModal
        isOpenModal={isOpenModal}
        searchData={searchData}
        handleModal={handleModal}
        handleSearch={handleSearch}
        setSearchData={setSearchData}
      />
      <GuestReservation
        isOpenModal={isOpenModal}
        handleModal={handleModal}
        searchData={searchData}
        setSearchData={setSearchData}
        handleSearch={handleSearch}
      />
    </SearchBarContainer>
  );
}

export default SearchBar;

const SearchBarContainer = styled.div``;

const Position = styled.div<{ pathname: string }>`
  ${({ pathname }) =>
    pathname === '/' &&
    css`
      position: fixed;
      z-index: 100;
      left: 50%;
      transform: translate(-50%);
      background: #fff;
      width: 870px;
      @media ${({ theme }) => theme.deviceSize.tablet} {
        width: 100%;
      }
    `}
  padding: 30px 0 50px;
  @media ${({ theme }) => theme.deviceSize.middle} {
    padding: 0;
  }
`;

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey_03};
  border-radius: 4px;
  width: 870px;
  margin: 0 auto;
  @media ${({ theme }) => theme.deviceSize.middle} {
    padding: 10px 0 20px;
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

const SearchButtonWrapper = styled.button<{ pathname: string }>`
  position: ${({ pathname }) => (pathname === '/' ? 'fixed' : 'absolute')};
  top: 113px;
  right: 50%;
  transform: translateX(440px);
  padding: 20px;
  background-color: transparent;
  z-index: 110;
  @media ${({ theme }) => theme.deviceSize.tablet} {
    right: 5px;
    transform: none;
  }
`;

const IconPosition = styled.div`
  height: 100%;
  width: 25px;
  padding: 20px;
`;
