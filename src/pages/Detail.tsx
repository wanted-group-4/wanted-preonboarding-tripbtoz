import React from 'react';
import styled from 'styled-components';
import { HotelCard, ReserveCard } from '@components/hotel';

const DetailImageSize: { width: number; height: number } = {
  width: 260,
  height: 130,
};
function Detail() {
  return (
    <Container>
      <Wrapper>
        <Box>
          <HotelCard
            name="웨스틴 조선 서울"
            base={2}
            max={4}
            imageSize={DetailImageSize}
          />
          <ReserveCard />
        </Box>
      </Wrapper>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Box = styled.article`
  background: white;
  width: 550px;
  padding: 30px;
`;
