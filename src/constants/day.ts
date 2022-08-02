export const week = ['일', '월', '화', '수', '목', '금', '토'];

export const yearArray = Array(13)
  .fill(1)
  .map((num, index) => num * index);

export const monthArray = (lastDay: number) =>
  Array(lastDay)
    .fill(1)
    .map((num, index) => num * index + 1);
