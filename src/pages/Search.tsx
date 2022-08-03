import React, { useState, useEffect } from 'react';
import HotelCard from '@components/hotel/HotelCard';
import styled from 'styled-components';
import axios from 'axios';
import useIntersection from '@hooks/useIntersection';

const HomeImageSize: { width: number; height: number } = {
  width: 220,
  height: 170,
};
interface Hotel {
  hotel_name: string;
  occupancy: {
    base: number;
    max: number;
  };
}

function Search() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Hotel[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isIntersecting) {
      setPage(prev => prev + 1);
      setIsLoading(true);
    }
  };

  const { setTarget } = useIntersection({ onIntersect });

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `http://localhost:4000/hotels?_page=${page}`,
      );
      setData(prev => [...prev, ...response.data]);
      setIsLoading(false);
    }
    getData();
  }, [page]);

  return (
    <Container>
      <Temp_searchBar />
      <HotelCardWrapper>
        {data &&
          data.map((hotel: Hotel, key) => (
            <HotelCard
              key={key}
              name={hotel.hotel_name}
              base={hotel.occupancy.base}
              max={hotel.occupancy.max}
              price={'430,000원'}
              imageSize={HomeImageSize}
            />
          ))}
        {isLoading && <Loading>마지막 호텔입니다</Loading>}
      </HotelCardWrapper>
      {data.length > 0 && <LastViewSection ref={setTarget} />}
    </Container>
  );
}

export default Search;

const Container = styled.div`
  padding-top: 50px;
`;
const Temp_searchBar = styled.div`
  width: 761px;
  height: 65px;
  border: 1px solid #717171;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 50px;
`;
const HotelCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 15px;
  height: 100%;
`;

const LastViewSection = styled.div`
  padding: 100px;
  height: 100px;
`;

const Loading = styled.div`
  color: #ff375c;
  text-align: center;
  padding: 14px 0px;
`;
