import React from 'react';
import styled from 'styled-components';
import { HotelCard, ReserveCard } from '@components/hotel';
import useLocationString from '@hooks/useLocationString';

const DetailImageSize = {
  desktop: { width: 240, height: 130 },
  mobile: {
    width: 200,
    height: 130,
  },
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
];

function Detail() {
  const { checkIn, checkOut, adult, kid, hotelName } = useLocationString();

  const handleReserve = (): void => {
    if (!hotelName) return;

    localStorage.setItem(
      hotelName,
      JSON.stringify({ checkIn, checkOut, adult, kid }),
    );
  };

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
            <ReserveCard handleReserve={handleReserve} />
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
  padding: 30px;
  background: #eeeeee;
`;

const Box = styled.article`
  width: 100%;
  background: white;
  padding: 30px;
  margin-bottom: 30px;
  @media ${({ theme }) => theme.deviceSize.tablet} {
    width: 100vw;
  }
`;
