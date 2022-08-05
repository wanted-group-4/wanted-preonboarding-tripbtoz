import React from 'react';
import styled from 'styled-components';

interface HotelCardSkeletonProps {
  skeletonHeight: { desktop: number; mobile: number };
}

function HotelCardSkeleton({ skeletonHeight }: HotelCardSkeletonProps) {
  return <Container skeletonHeight={skeletonHeight}></Container>;
}

const Container = styled.div<{
  skeletonHeight: { desktop: number; mobile: number };
}>`
  width: 100%;
  height: ${props => props.skeletonHeight.desktop}px;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    height: ${props => props.skeletonHeight.mobile}px;
  }
  background: #f5f5f5;
`;

export default HotelCardSkeleton;
