import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { BASE_URL } from '@api/index';

// 호텔 10개+@ 갖고오기
export const fetchHotels = async ({ pageParam = 1 }) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/hotels?_page=${pageParam}&_limit=10`,
    );

    const getDelay = (delay: number) =>
      new Promise(resolve => setTimeout(resolve, delay));
    await getDelay(500);

    return response.data;
  } catch (error) {
    console.log(error);
  }
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

// 검색 시 max 기준으로 나열
export const fetchFilterHotels = async ({ queryKey }) => {
  const maxPerson = queryKey[2];
  const pageParam = queryKey[3];
  try {
    const response = await axios.get(
      `${BASE_URL}/hotels?occupancy.max_gte=${maxPerson}&_sort=occupancy.max&_page=${pageParam}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
