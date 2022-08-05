import React from 'react';
import HotelCard from '@components/hotel/HotelCard';
import styled from 'styled-components';
import useIntersection from '@hooks/useIntersection';
import SearchBar from '@components/search/SearchBar';
import { fetchHotels } from '@api/searchApi';
import { useInfiniteQuery } from '@tanstack/react-query';
import HotelCardSkeleton from '@components/common/skeleton/HotelCardSkeleton';

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
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(['projects'], fetchHotels, {
      getNextPageParam: (_, allPages) => {
        if (allPages.length !== 101) {
          return allPages.length;
        }
      },
    });

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isIntersecting) {
      if (!hasNextPage || !data) return;
      fetchNextPage();
    }
  };

  const { setTarget } = useIntersection({ onIntersect });

  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
      <HotelCardWrapper>
        {data?.pages &&
          data.pages.map(page => {
            return page.map((hotel: Hotel, key: number) => {
              return (
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
              );
            });
          })}
        {isFetchingNextPage &&
          Array.from({ length: SKELETON_COUNT }).map((_, index) => (
            <HotelCardSkeleton key={index} skeletonHeight={skeletonHeight} />
          ))}
      </HotelCardWrapper>

      {data?.pages.length !== 0 && (
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

const HotelCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 15px;
  height: 100%;
  width: 612px;
`;

const LastViewSection = styled.div`
  padding: 100px;
  height: 50px;
  border: 1px solid red;
  color: ${({ theme }) => theme.color.lightRed};
  text-align: center;
`;

const Loading = styled.div`
  color: blue;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;
