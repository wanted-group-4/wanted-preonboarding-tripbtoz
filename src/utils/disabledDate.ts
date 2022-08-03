import { format } from 'date-fns';

const disabledDate = (
  dateRef: React.MutableRefObject<{
    [key: string]: HTMLDivElement | null;
  }>,
) => {
  const date = new Date();
  const yaer = date.getFullYear();
  const month = date.getMonth();

  const today = format(new Date(), 'yyyyMMdd');
  const first = format(new Date(yaer, month, 1), 'yyyyMMdd');

  for (let i = +first; i < +today; i++) {
    dateRef.current[String(i)]?.classList.add('disabled');
  }
};

export default disabledDate;
