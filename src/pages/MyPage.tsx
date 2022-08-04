import React from 'react';
import styled from 'styled-components';
import HotelCard from '@components/hotel/HotelCard';

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

function MyPage() {
  return (
    <Container>
      <Title>내 예약 확인하기</Title>

      <HotelCardWrapper>
        <ReservationDate>
          2022.08.23 ~ 2022.09.01 (성인 2명 어린이 1명)
        </ReservationDate>
        <HotelCard
          imageSize={HomeImageSize}
          name={'호텔이름'}
          base={2}
          max={4}
          price={'430,000원'}
        />
      </HotelCardWrapper>

      <HotelCardWrapper>
        <ReservationDate>
          2022.08.23 ~ 2022.09.01 (성인 2명 어린이 1명)
        </ReservationDate>
        <HotelCard
          imageSize={HomeImageSize}
          name={'호텔이름'}
          base={2}
          max={4}
          price={'430,000원'}
        />
        <HotelCard
          imageSize={HomeImageSize}
          name={'호텔이름'}
          base={2}
          max={4}
          price={'430,000원'}
        />
        <HotelCard
          imageSize={HomeImageSize}
          name={'호텔이름'}
          base={2}
          max={4}
          price={'430,000원'}
        />
        <HotelCard
          imageSize={HomeImageSize}
          name={'호텔이름'}
          base={2}
          max={4}
          price={'430,000원'}
        />
      </HotelCardWrapper>

      <LastViewSection />
    </Container>
  );
}

export default MyPage;

const Container = styled.div`
  padding-top: 66px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  padding: 0px 55px;
`;

const HotelCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 612px;
  margin: 0 auto;
  gap: 15px;
  height: 100%;
`;

const ReservationDate = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-top: 26px;
  align-self: flex-start;
`;

const LastViewSection = styled.div`
  padding: 100px;
  height: 100px;
`;
