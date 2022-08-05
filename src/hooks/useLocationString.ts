import { defaultCheckIn, defaultCheckOut } from '@constants/day';
import { useLocation } from 'react-router-dom';

function useLocationString() {
  const location = useLocation();
  const { search } = location;
  const query = new URLSearchParams(search);
  const result = {
    checkIn: query.get('checkIn') ?? defaultCheckIn,
    checkOut: query.get('checkOut') ?? defaultCheckOut,
    adult: query.get('adult') ?? 2,
    kid: query.get('kid') ?? 0,
    hotelName: query.get('hotelName') ?? '',
  };
  return result;
}

export default useLocationString;
