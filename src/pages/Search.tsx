import React from 'react';
import HotelCard from '@components/hotel/HotelCard';

const HomeImageSize: { width: number; height: number } = {
  width: 220,
  height: 170,
};

import SearchBar from '@components/search/SearchBar';

function Search() {
  return (
    <div>
      <SearchBar />
      <HotelCard
        name="웨스틴 조선 서울(Home 카드)"
        base={2}
        max={4}
        price="430,000원"
        imageSize={HomeImageSize}
      />
    </div>
  );
}

export default Search;
