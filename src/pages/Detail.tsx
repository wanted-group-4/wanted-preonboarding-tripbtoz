import React from 'react';
import styled from 'styled-components';
import { HotelCard, ReserveCard } from '@components/hotel';

const DetailImageSize: { width: number; height: number } = {
  width: 260,
  height: 130,
};

interface DetailProps {
  hotel_name: string;
  occupancy: {
    base: number;
    max: number;
  };
}

const initDummyData: DetailProps[] = [
  {
    hotel_name: '파르나스 호텔 제주',
    occupancy: {
      base: 2,
      max: 2,
    },
  },
  {
    hotel_name: '고창 웰파크시티 힐링카운티',
    occupancy: {
      base: 2,
      max: 2,
    },
  },
  {
    hotel_name: '사우 베이 리조트',
    occupancy: {
      base: 2,
      max: 2,
    },
  },
];

function Detail() {
  return (
    <Container>
      <Wrapper>
        {initDummyData.map(hotel => (
          <Box key={hotel.hotel_name}>
            <HotelCard
              name={hotel.hotel_name}
              base={hotel.occupancy.base}
              max={hotel.occupancy.max}
              imageSize={DetailImageSize}
            />
            <ReserveCard />
          </Box>
        ))}
      </Wrapper>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.article`
  background: white;
  width: 550px;
  padding: 30px;
`;
