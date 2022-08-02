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
const Container = styled.div``;
const SectionBox = styled.div``;
const FirstSection = styled.div``;
const AgeGroup = styled.div``;
const Age = styled.div``;
const CountBox = styled.div``;
const Count = styled.button``;
const Number = styled.span``;

const SecondSection = styled.div``;

const ThirdSection = styled.div``;
const Button = styled.button<{ Apply?: any }>``;
