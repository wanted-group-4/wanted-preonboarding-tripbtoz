import React from 'react';
import HotelCard from '@components/hotel/HotelCard';
import styled from 'styled-components';
import useIntersection from '@hooks/useIntersection';
import SearchBar from '@src/components/search/SearchBar';
import { fetchHotels } from '@src/api/searchApi';
import { useInfiniteQuery } from '@tanstack/react-query';

const HomeImageSize = {
  desktop: { width: 220, height: 170 },
  mobile: {
    width: 150,
    height: 130,
  },
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
        if (allPages.length < 100) {
          return allPages.length + 1;
        }
      },
    });
  console.log(data);
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isIntersecting) {
      if (!hasNextPage || !data || isFetchingNextPage) return;
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
            return page.map((hotel: Hotel, key) => {
              return (
                <HotelCard
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
      </HotelCardWrapper>
      {/* {<Loading>로딩중...</Loading>} */}
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
