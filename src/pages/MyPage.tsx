import React from 'react';
import styled from 'styled-components';
import HotelCard from '@components/hotel/HotelCard';
import { fetchReserveHotels } from '@api/reserveApi';
import { useInfiniteQuery } from '@tanstack/react-query';
import useIntersection from '@src/hooks/useIntersection';

const HomeImageSize = {
  desktop: { width: 220, height: 170 },
  mobile: {
    width: 150,
    height: 130,
  },
};
interface Hotel {
  name: string;
  check_in: string;
  check_out: string;
  occupancy: {
    adult: number;
    kid: number;
  };
}

function MyPage() {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery(['reserved'], fetchReserveHotels, {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length !== 0) {
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

  return (
    <Container>
      <Title>내 예약 확인하기</Title>
      {data &&
        (data.pages[0].length !== 0 ? (
          data.pages.map(page => {
            return page.map((hotel: Hotel, key) => {
              const start = hotel.check_in.split('-');
              const end = hotel.check_out.split('-');
              return (
                <HotelCardWrapper key={key}>
                  <ReservationDate>
                    {`${start[0]}.${start[1]}.${start[2]} ~ ${end[0]}.${end[1]}.${end[2]} (성인 ${hotel.occupancy.adult}명 어린이 ${hotel.occupancy.kid}명)`}
                  </ReservationDate>
                  <HotelCard
                    imageSize={HomeImageSize}
                    name={hotel.name}
                    price={'430,000원'}
                  />
                </HotelCardWrapper>
              );
            });
          })
        ) : (
          <NoReservation>
            <span>예약 내역이 없습니다.</span>
          </NoReservation>
        ))}
      {data?.pages[0].length !== 0 && (
        <LastViewSection ref={setTarget}>마지막 호텔입니다</LastViewSection>
      )}
    </Container>
  );
}

export default MyPage;

const Container = styled.div`
  padding-top: 66px;
  @media ${({ theme }) => theme.deviceSize.tablet} {
    padding: 0px 30px;
  }
  @media ${({ theme }) => theme.deviceSize.mobile} {
    padding: 0px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  padding: 0px 55px;
  @media ${({ theme }) => theme.deviceSize.tablet} {
    padding: 0;
  }
  @media ${({ theme }) => theme.deviceSize.mobile} {
    margin-bottom: 43px;
  }
`;

const HotelCardWrapper = styled.div`
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
  @media ${({ theme }) => theme.deviceSize.mobile} {
    margin-bottom: 24px;
  }
`;

const ReservationDate = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-top: 26px;
  align-self: flex-start;
  @media ${({ theme }) => theme.deviceSize.tablet} {
    width: 100%;
  }
  @media ${({ theme }) => theme.deviceSize.mobile} {
    display: none;
  }
`;

const LastViewSection = styled.div`
  padding: 50px 0px;
  color: ${({ theme }) => theme.color.lightRed};
  text-align: center;
`;

const NoReservation = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px 0;
  font-size: 22px;
  span {
    color: ${({ theme }) => theme.color.lightRed};
  }
  @media ${({ theme }) => theme.deviceSize.tablet} {
    font-size: 18px;
  }
  @media ${({ theme }) => theme.deviceSize.mobile} {
    font-size: 14px;
  }
`;
