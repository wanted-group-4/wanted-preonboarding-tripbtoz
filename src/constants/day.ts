import { add, format } from 'date-fns';

export const week = ['일', '월', '화', '수', '목', '금', '토'];

export const yearArray = Array(13)
  .fill(1)
  .map((num, index) => num * index);

export const monthArray = (lastDay: number) =>
  Array(lastDay)
    .fill(1)
    .map((num, index) => num * index + 1);

export const defaultCheckIn = format(
  add(new Date(), { days: 7 }),
  'yyyy-MM-dd',
);

export const defaultCheckOut = format(
  add(new Date(), { days: 8 }),
  'yyyy-MM-dd',
);
