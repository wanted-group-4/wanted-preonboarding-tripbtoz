import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { BsStarFill } from 'react-icons/bs';

interface HotelCardProps {
  name: string;
  max: number;
  base: number;
  price?: string;
  animation?: boolean;
  index?: number;
  imageSize: {
    desktop: { width: number; height: number };
    mobile: { width: number; height: number };
  };
}

const fadeIn = keyframes`
 from {
    opacity : 0;
    transform : translateY(20px)
} to {
    opacity : 1;
    transform : translateY(0)
}
`;

function HotelCard({
  imageSize,
  name,
  base,
  max,
  price,
  animation,
  index,
}: HotelCardProps) {
  return (
    <Container
      animation={animation ? true : false}
      delay={index ? `${index / 10}s` : '0s'}
    >
      <Wrapper>
        <Image imageSize={imageSize}>
          <img src="./images/thumbnail_hotel.png" alt="호텔 사진" />
        </Image>
        <Content>
          <ContentItem>
            <Title>{name}</Title>
            <SubTitle>
              <Star>
                <IConWrap>
                  <BsStarFill size={13} color="#FEC700" />
                </IConWrap>
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

export default HotelCard;

const Container = styled.section<{
  animation: boolean;
  delay: string;
}>`
  width: 100%;
  cursor: pointer;
  ${props =>
    props.animation &&
    css`
      animation: ${fadeIn} 1s ease-in 0.5s;
      animation-fill-mode: forwards;
      opacity: 0;
      animation-delay: ${props.delay};
    `}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

const Image = styled.div<{
  imageSize: {
    desktop: { width: number; height: number };
    mobile: { width: number; height: number };
  };
}>`
  display: block;
  img {
    width: ${props => `${props.imageSize.desktop.width}px`};
    height: ${props => `${props.imageSize.desktop.height}px`};
    @media ${({ theme }) => theme.deviceSize.mobile} {
      width: 41.5vw;
      min-width: ${props => `${props.imageSize.mobile.height}px`};
      height: ${props => `${props.imageSize.mobile.height}px`};
    }
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 5px 20px;
  @media ${({ theme }) => theme.deviceSize.tablet} {
    padding: 5px 15px;
  }
`;

const ContentItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  word-break: break-all;
  font-weight: 700;
  line-height: 21.78px;
  margin-bottom: 5px;
  font-size: 18px;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    font-size: 3.5vw;
  }
`;

const SubTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  word-break: break-all;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px 0;
  }
`;

const Star = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  span {
    color: #5e5e5e;
    font-size: 10px;
    margin-left: 5px;
    white-space: pre;
  }
`;

const IConWrap = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  svg {
    position: absolute;
    top: 0;
  }
`;

const Review = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  span {
    color: #5e5e5e;
    font-size: 10px;
  }
`;

const Personnel = styled.div`
  span {
    color: #5e5e5e;
    font-size: 14px;
    @media ${({ theme }) => theme.deviceSize.mobile} {
      font-size: 2vw;
    }
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
    @media ${({ theme }) => theme.deviceSize.mobile} {
      font-size: 4vw;
    }
  }
  span {
    font-size: 10px;
    color: #cdcdcd;
    @media ${({ theme }) => theme.deviceSize.mobile} {
      font-size: 1vw;
    }
  }
`;
