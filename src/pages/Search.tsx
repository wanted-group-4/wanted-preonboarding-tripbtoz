import React from 'react';
import HotelCard from '@components/hotel/HotelCard';
import styled from 'styled-components';
import useIntersection from '@hooks/useIntersection';
import SearchBar from '@components/search/SearchBar';
import { fetchHotels } from '@api/searchApi';
import { useInfiniteQuery } from '@tanstack/react-query';
import HotelCardSkeleton from '@components/common/skeleton/HotelCardSkeleton';
import useLocationString from '@hooks/useLocationString';
import useNavigateSearch from '@hooks/useNavigateSearch';

const SKELETON_COUNT = 10;

const HomeImageSize = {
  desktop: { width: 220, height: 170 },
  mobile: {
    width: 150,
    height: 130,
  },
};

const skeletonHeight = {
  desktop: HomeImageSize.desktop.height,
  mobile: HomeImageSize.mobile.height,
};

interface Hotel {
  hotel_name: string;
  occupancy: {
    base: number;
    max: number;
  };
}

function Search() {
  const locationQuery = useLocationString();
  const navigateSearch = useNavigateSearch();
  const maxPerson = +locationQuery.adult + +locationQuery.kid;
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(['projects', maxPerson], fetchHotels, {
      getNextPageParam: (_, allPages) => {
        if (allPages.length < 100) {
          return allPages.length + 1;
        }
      },
    });

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isIntersecting) {
      if (!hasNextPage || !data || isFetchingNextPage) return;
      fetchNextPage();
    }
  };

  const { setTarget } = useIntersection({ onIntersect });

  const handleClick = (hotelName: string) => {
    navigateSearch('/detail', { ...locationQuery, hotelName });
  };

  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
      <HotelCardSection>
        {data?.pages &&
          data.pages.map(page => {
            return page.map((hotel: Hotel, key: number) => {
              return (
                <HotelCardWrapper
                  key={key}
                  onClick={() => handleClick(hotel.hotel_name)}
                >
                  <HotelCard
                    animation={true}
                    index={key}
                    key={key}
                    name={hotel.hotel_name}
                    base={hotel.occupancy.base}
                    max={hotel.occupancy.max}
                    price={'430,000원'}
                    imageSize={HomeImageSize}
                  />
                </HotelCardWrapper>
              );
            });
          })}
        {isFetchingNextPage &&
          Array.from({ length: SKELETON_COUNT }).map((_, index) => (
            <HotelCardSkeleton key={index} skeletonHeight={skeletonHeight} />
          ))}
      </HotelCardSection>

      {data?.pages[0].length !== 0 && (
        <LastViewSection ref={setTarget}>마지막 호텔입니다</LastViewSection>
      )}
    </Container>
  );
}

export default Search;

const Container = styled.div`
  padding-top: 50px;
`;

const SearchBarWrapper = styled.div`
  margin-bottom: 65px;
`;

const HotelCardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 15px;
  height: 100%;
  width: 612px;
  @media ${({ theme }) => theme.deviceSize.tablet} {
    width: 100%;
  }
`;

const HotelCardWrapper = styled.div`
  width: 100%;
`;

const LastViewSection = styled.div`
  padding: 50px 0px;
  color: ${({ theme }) => theme.color.lightRed};
  text-align: center;
`;
