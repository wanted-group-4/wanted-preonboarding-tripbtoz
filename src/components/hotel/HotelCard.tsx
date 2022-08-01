import React from 'react';
import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';

interface HotelCardProps {
  name: string;
  max: number;
  base: number;
  price?: string;
  imageSize: {
    width: number;
    height: number;
  };
}

export default function HotelCard({
  imageSize,
  name,
  base,
  max,
  price,
}: HotelCardProps) {
  return (
    <Container>
      <Wrapper>
        <Image imageSize={imageSize}>
          <img src="./images/thumbnail_hotel.png" alt="호텔 사진" />
        </Image>
        <Content>
          <ContentItem>
            <Title>{name}</Title>
            <SubTitle>
              <Star>
                <BsStarFill size={16} color="#FEC700" />
                <span>4.4</span>
                <span>/</span>
                <span>5</span>
              </Star>
              <Review>
                <span>총 530건의 리뷰</span>
              </Review>
            </SubTitle>
          </ContentItem>
          <Personnel>
            <span>
              기준 {base}인 | 최대 {max}인
            </span>
          </Personnel>
          {price && (
            <Price>
              <p>{price}</p>
              <span>세금 및 수수료 불포함</span>
            </Price>
          )}
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.article`
  width: 600px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

const Image = styled.div<{ imageSize: { width: number; height: number } }>`
  display: block;
  img {
    width: ${props => `${props.imageSize.width}px`};
    height: ${props => `${props.imageSize.height}px`};
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 15px 30px;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 21.78px;
  margin-bottom: 5px;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  svg {
    margin-bottom: 2px;
  }
  span {
    height: 100%;
    color: #5e5e5e;
    font-size: 14px;
    margin-left: 5px;
  }
`;

const Review = styled.div`
  display: flex;
  align-items: center;
  span {
    height: 100%;
    color: #5e5e5e;
    font-size: 14px;
  }
`;

const Personnel = styled.div`
  span {
    color: #5e5e5e;
    font-size: 14px;
  }
`;

const Price = styled.span`
  position: absolute;
  right: 20px;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  p {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 5px;
  }
  span {
    font-size: 10px;
    color: #cdcdcd;
  }
`;
