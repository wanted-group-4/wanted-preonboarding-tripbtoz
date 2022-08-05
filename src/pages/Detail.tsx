import React from 'react';
import styled from 'styled-components';
import { HotelCard, ReserveCard } from '@components/hotel';
import useLocationString from '@hooks/useLocationString';
import { getHotelInformation } from '@api/searchApi';
import { patchReserveHotel } from '@api/reserveApi';
import HotelCardSkeleton from '@src/components/common/skeleton/HotelCardSkeleton';
import SearchBar from '@components/search/SearchBar';

const SKELETON_COUNT = 2;

const DetailImageSize = {
  desktop: { width: 240, height: 130 },
  mobile: {
    width: 200,
    height: 130,
  },
};

function Detail() {
  const { checkIn, checkOut, adult, kid, hotelName } = useLocationString();

  const { data, isLoading } = getHotelInformation(hotelName);

  const patchReserveHotelInfo = patchReserveHotel();
  const handleReserve = () => {
    if (!hotelName) return;
    patchReserveHotelInfo.mutate({
      hotelName: hotelName,
      check_in: checkIn,
      check_out: checkOut,
      occupancy: {
        adult: Number(adult),
        kid: Number(kid),
      },
    });
    setLocalStorage();
  };

  const setLocalStorage = () => {
    if (!hotelName) return;
    localStorage.setItem(
      hotelName,
      JSON.stringify({ checkIn, checkOut, adult, kid }),
    );
  };

  return (
    <Container>
      <SearchBar />
      <Wrapper>
        {!isLoading ? (
          data &&
          [data[0], data[0]].map((hotel, index) => (
            <Box key={index}>
              <HotelCard
                name={hotel.hotel_name}
                base={hotel.occupancy.base}
                max={hotel.occupancy.max}
                imageSize={DetailImageSize}
              />
              <ReserveCard handleReserve={handleReserve} />
            </Box>
          ))
        ) : (
          <HotelCardSkeletonWrap>
            {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
              <HotelCardSkeleton
                key={index}
                skeletonHeight={{
                  desktop: 400,
                  mobile: 400,
                }}
              />
            ))}
          </HotelCardSkeletonWrap>
        )}
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
  background: #ffffff;
`;

const Box = styled.article`
  width: 100%;
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 400px;
  padding: 30px;
  margin-bottom: 30px;
  @media ${({ theme }) => theme.deviceSize.tablet} {
    width: 100vw;
  }
`;

const HotelCardSkeletonWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 30px 0;
  flex-direction: column;
  align-items: center;
`;
