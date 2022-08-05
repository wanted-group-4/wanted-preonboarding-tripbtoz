import { add, format } from 'date-fns';

const setDefaultDate = (
  dateRef: React.MutableRefObject<{
    [key: string]: HTMLDivElement | null;
  }>,
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
};

export default setDefaultDate;
