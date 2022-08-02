import React from 'react';
import styled from 'styled-components';

export default function GuestReservation() {
  return (
    <>
      <Container>
        <SectionBox>
          <FirstSection>
            <AgeGroup>성인</AgeGroup>
            <CountBox>
              <Count>-</Count>
              <Number> 2명 </Number>
              <Count>+</Count>
            </CountBox>
          </FirstSection>
          <SecondSection>
            <AgeGroup>어린이</AgeGroup>
            <Age>(0 ~ 17세)</Age>
            <CountBox>
              <Count>-</Count>
              <Number> 0명 </Number>
              <Count>+</Count>
            </CountBox>
          </SecondSection>
          <ThirdSection>
            <Button>초기화</Button>
            <Button Apply>적용</Button>
          </ThirdSection>
        </SectionBox>
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
`;
const SectionBox = styled.div`
  position: relative;
  padding: 17px;
`;
const FirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
`;
const AgeGroup = styled.div``;
const Age = styled.div`
  color: ${({ theme }) => theme.color.grey_03};
  position: relative;
  left: -35px;
  font-size: 12px;
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

const ThirdSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;
const Button = styled.button<{ Apply?: any }>`
  width: 140px;
  height: 35px;
  background: ${props => (props.Apply ? '#FF375C' : '#FFFFFF')};
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  font-weight: 700;
  font-size: 13px;
  color: ${props => (props.Apply ? '#FFFFFF' : '#000000')};
  margin-left: ${props => (props.Apply ? '10px' : '')};
`;
