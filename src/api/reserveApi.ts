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
    await axios.post(`${BASE_URL}/reserved`, {
      name,
      check_in,
      check_out,
      occupancy,
    });
  };

  const queryClient = useQueryClient();
  return useMutation(fetch, {
    onSuccess: () => queryClient.invalidateQueries(['reserved']),
  });
};
