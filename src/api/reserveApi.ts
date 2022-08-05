import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { BASE_URL } from '@api/index';

export const patchReserveHotel = () => {
  const fetch = async ({
    name,
    check_in,
    check_out,
    occupancy,
  }: {
    name: string;
    check_in: any;
    check_out: any;
    occupancy: { adult: number; child: number };
  }) => {
    try {
      await axios.post(`${BASE_URL}/reserved`, {
        name,
        check_in,
        check_out,
        occupancy,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const queryClient = useQueryClient();
  return useMutation(fetch, {
    onSuccess: () => queryClient.invalidateQueries(['reserved']),
  });
};

export const fetchReserveHotels = async ({ pageParam = 1 }) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/reserved?_page=${pageParam}&_limit=10`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
