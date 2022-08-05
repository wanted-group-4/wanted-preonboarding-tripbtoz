import React from 'react';
import styled from 'styled-components';

interface ConfirmReservationProps {
  closeConfirmReservation: () => void;
}

function ConfirmReservation({
  closeConfirmReservation,
}: ConfirmReservationProps) {
  return (
    <>
      <BackGround>
        <Container>
          <div>
            <Text>예약이 완료되었습니다</Text>
            <Button onClick={closeConfirmReservation}>확인</Button>
          </div>
        </Container>
      </BackGround>
    </>
  );
}
export default ConfirmReservation;

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(238, 238, 238, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 300px;
  height: 200px;
  background: #ffffff;
  box-shadow: 0px 4px 15px 3px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.deviceSize.middle} {
    width: 250px;
    height: 150px;
  }
`;
const Text = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  position: relative;
  top: -10px;
  @media ${({ theme }) => theme.deviceSize.middle} {
    font-size: 13px;
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.color.pink_02};
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 8px 35px;
  position: relative;
  right: -19px;
  top: 30px;
  @media ${({ theme }) => theme.deviceSize.middle} {
    font-size: 10px;
    right: -10px;
    top: 25px;
    font-weight: 400;
  }
`;
