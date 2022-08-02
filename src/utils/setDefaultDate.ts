import { add, format } from 'date-fns';

const setDefaultDate = (
  dateRef: React.MutableRefObject<{
    [key: string]: HTMLDivElement | null;
  }>,
  checkRef: React.MutableRefObject<{
    [key: string]: string;
  }>,
) => {
  const today = format(add(new Date(), { days: 7 }), 'yyyyMMdd');
  const next = format(add(new Date(), { days: 8 }), 'yyyyMMdd');

  for (let i = +today; i < +next; i++) {
    dateRef.current[String(i)]?.classList.add('selected');
  }

  dateRef.current[today]?.classList.add('start');
  dateRef.current[next]?.classList.add('end');

  checkRef.current.checkIn = today;
  checkRef.current.checkOut = next;
};

export default setDefaultDate;
