import React from 'react';
import HotelCard from '@components/hotel/HotelCard';

const DetailImageSize: { width: number; height: number } = {
  width: 260,
  height: 130,
};
function Detail() {
  return (
    <div>
      <HotelCard
        name="웨스틴 조선 서울 (Detail 카드)"
        base={2}
        max={4}
        imageSize={DetailImageSize}
      />
    </div>
  );
}

export default Detail;
