import { useLocation } from 'react-router-dom';

function useLocationString() {
  const location = useLocation();
  const { search } = location;
  const query = new URLSearchParams(search);
  const result = {
    checkIn: query.get('checkIn') ?? '',
    checkOut: query.get('checkOut') ?? '',
    adult: query.get('adult') ?? 2,
    kid: query.get('kid') ?? 0,
  };
  return result;
}

export default useLocationString;
