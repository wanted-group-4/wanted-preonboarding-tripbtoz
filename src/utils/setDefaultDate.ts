import { ISearchData } from '@type/search';
import { add, format } from 'date-fns';

const setDefaultDate = (
  dateRef: React.MutableRefObject<{
    [key: string]: HTMLDivElement | null;
  }>,
  searchData: ISearchData,
) => {
  const date = new Date();

  const today = format(date, 'yyyyMMdd');
  const start = format(add(date, { days: 7 }), 'yyyyMMdd');
  const end = format(add(date, { days: 8 }), 'yyyyMMdd');

  for (let i = +start; i < +end; i++) {
    dateRef.current[String(i)]?.classList.add('selected');
  }

  dateRef.current[today]?.classList.add('today');
  dateRef.current[start]?.classList.add('start');
  dateRef.current[end]?.classList.add('end');

  searchData.calendar.checkIn = format(add(date, { days: 7 }), 'yyyy-MM-dd');
  searchData.calendar.checkOut = format(add(date, { days: 8 }), 'yyyy-MM-dd');
};

export default setDefaultDate;
