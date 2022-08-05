import React from 'react';
import styled from 'styled-components';

type ReserveCardProps = {
  handleReserve: () => void;
};

function ReserveCard({ handleReserve }: ReserveCardProps) {
  return (
    <Container>
      <BadgeBox>
        <Badge>
          <LowPriceBadge>최저가</LowPriceBadge>
        </Badge>
        <Badge>
          <WifiBadge>무료 WiFi</WifiBadge>
        </Badge>
      </BadgeBox>
      <InfoBox>
        <Notice>
          <p>무료취소</p>
        </Notice>
        <Info>
          <Price>
            <Charge>
              <span>1박 </span>
              297,000 원
            </Charge>
            <ExtraCharge>세금 및 수수료 불포함</ExtraCharge>
          </Price>
          <ReserveButton onClick={handleReserve}>예약</ReserveButton>
        </Info>
      </InfoBox>
    </Container>
  );
}

export default ReserveCard;

const Container = styled.section`
  width: 100%;
  border: 1px solid #cdcdcd;
  padding: 20px;
  margin-top: 14px;
  border-radius: 4px;
`;

const BadgeBox = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

const Badge = styled.div`
  width: 100%;
`;

const LowPriceBadge = styled.div`
  display: inline-block;
  color: rgb(255, 255, 255);
  background: rgb(255, 59, 48);
  text-align: center;
  padding: 3px 5px;
  line-height: 15px;
  min-width: 44px;
  font-size: 10px;
  border-radius: 2px;
  opacity: 0.8;
  margin-bottom: 6px;
`;

const WifiBadge = styled.div`
  display: inline-block;
  color: rgb(104, 104, 136);
  background: rgb(255, 255, 255);
  border: 1px solid rgb(104, 104, 136);
  line-height: 15px;
  min-width: 44px;
  font-size: 10px;
  border-radius: 2px;
  padding: 3px 5px;
  opacity: 1;
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Notice = styled.div`
  font-weight: 700;
  p {
    font-size: 14px;
    line-height: 20px;
    color: rgb(15, 119, 221);
  }
`;

const Info = styled.div`
  display: block;
  text-align: right;
  width: auto;
`;

const Price = styled.div`
  margin-right: 6px;
`;

const Charge = styled.div`
  font-weight: 800;
  color: rgb(34, 34, 34);
  text-align: right;
  line-height: 24px;
  font-size: 16px;
  span {
    font-size: 12px;
    font-weight: normal;
    line-height: 24px;
    margin-right: 6px;
  }
`;
const ExtraCharge = styled.div`
  font-size: 10px;
  line-height: 15px;
  color: rgb(184, 184, 184);
  text-align: right;
`;

const ReserveButton = styled.button`
  background: rgb(255, 55, 92);
  color: rgb(255, 255, 255);
  border-radius: 4px;
  min-height: 32px;
  padding: 6px 40px;
  font-size: 14px;
  line-height: 24px;
  min-width: 106px;
  margin-top: 10px;
`;
