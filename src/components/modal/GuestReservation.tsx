import React, { useState } from 'react';
import styled from 'styled-components';
import MobileHeader from '@components/modal/MobileHeader';

export default function GuestReservation({ count, setCount }: any) {
  const handleCountMinus = e => {
    e.stopPropagation();
    const { name } = e.target;
    setCount({ ...count, [name]: count[name] - 1 });
    if (count[name] <= 0) {
      setCount({ ...count, [name]: 0 });
    }
  };

  const handleCountPlus = e => {
    e.stopPropagation();
    const { name } = e.target;
    setCount({ ...count, [name]: count[name] + 1 });
  };

  const confirmation = e => {
    console.log('적용');
    document.body.style.overflow = 'unset';
  };

  const initialization = e => {
    e.stopPropagation();
    setCount(() => ({ adult: 2, kid: 0 }));
  };

  return (
    <>
      <Container>
        <MobileHeader />
        <SectionBox>
          <FirstSection>
            <AgeGroup>성인</AgeGroup>
            <CountBox>
              <Count name="adult" onClick={handleCountMinus}>
                -
              </Count>
              <Number> {count.adult}명 </Number>
              <Count name="adult" onClick={handleCountPlus}>
                +
              </Count>
            </CountBox>
          </FirstSection>
          <SecondSection>
            <AgeGroup>어린이</AgeGroup>
            <Age>(0 ~ 17세)</Age>
            <CountBox>
              <Count name="kid" onClick={handleCountMinus}>
                -
              </Count>
              <Number> {count.kid}명 </Number>
              <Count name="kid" onClick={handleCountPlus}>
                +
              </Count>
            </CountBox>
          </SecondSection>
        </SectionBox>
        <ButtonBox>
          <Button onClick={initialization}>초기화</Button>
          <Button Apply onClick={confirmation}>
            적용
          </Button>
        </ButtonBox>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 319px;
  height: 190px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: 100;
  @media ${({ theme }) => theme.deviceSize.middle} {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const SectionBox = styled.div`
  position: relative;
  top: 17px;
  padding: 17px;
  @media ${({ theme }) => theme.deviceSize.middle} {
    width: 100vw;
    height: 60vh;
    border-top: 1px solid #d9d9d9;
  }
`;
const FirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  margin-bottom: 10px;
`;
const AgeGroup = styled.div`
  width: 50px;
`;
const Age = styled.div`
  color: ${({ theme }) => theme.color.grey_03};
  position: relative;
  left: -35px;
  font-size: 12px;
  @media ${({ theme }) => theme.deviceSize.middle} {
    flex: 1 1 auto;
    left: 0;
  }
`;
const CountBox = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;
const Count = styled.button`
  color: ${({ theme }) => theme.color.pink_02};
  padding: 5px;
  width: 30px;
  font-size: 20px;
  font-weight: 500;
`;
const Number = styled.span`
  display: inline-block;
  width: 50px;
  text-align: center;
`;

const SecondSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
`;

const ButtonBox = styled.div`
  display: none;
  @media ${({ theme }) => theme.deviceSize.middle} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-top: 1px solid #d9d9d9;
    height: 19vw;
    width: 100%;
    padding: 10px;
  }
`;
const Button = styled.button<{ Apply?: any }>`
  width: 300px;
  height: 11vw;
  background: ${props => (props.Apply ? '#FF375C' : '#FFFFFF')};
  border: 1px solid #d9d9d9;
  font-weight: 700;
  font-size: 13px;
  color: ${props => (props.Apply ? '#FFFFFF' : '#000000')};
  margin-left: ${props => (props.Apply ? '20px' : '')};
  width: 300px;
  height: 11vw;
  font-size: 5vw;
  border-radius: 5px;
`;
