import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { BASE_URL } from '@api/index';

// 호텔 10개+@ 갖고오기
const fetchHotels = async ({ queryKey }) => {
  const page = queryKey[1];
  try {
    const response = await axios.get(
      `${BASE_URL}/hotels?_page=${page}_limit=10`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHotels = (hotelPage: number) => {
  return useQuery(['hotels', hotelPage], fetchHotels);
};

// 호텔 하나에 대한 정보
const fetchHotelInformation = async ({ queryKey }) => {
  const hotelName = queryKey[2];
  try {
    const response = await axios.get(
      `${BASE_URL}/hotels?hotel_name_like=${hotelName}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHotelInformation = (hotelName: string) => {
  return useQuery(['hotel', 'detail', hotelName], fetchHotelInformation);
};
