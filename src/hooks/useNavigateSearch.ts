import { createSearchParams, useNavigate } from 'react-router-dom';

function useNavigateSearch() {
  const navigate = useNavigate();
  return (pathname, params) =>
    navigate({ pathname, search: `?${createSearchParams(params)}` });
}

export default useNavigateSearch;
