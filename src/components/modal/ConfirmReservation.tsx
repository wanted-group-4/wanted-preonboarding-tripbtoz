import React from 'react';
import styled from 'styled-components';

export default function ConfirmReservation() {
  return (
    <>
      <BackGround>
        <Container>
          <div>
            <Text>예약이 완료되었습니다</Text>
            <Button>확인</Button>
          </div>
        </Container>
      </BackGround>
    </>
  );
}
const BackGround = styled.div``;
const Container = styled.div``;
const Text = styled.div``;

const Button = styled.button``;
