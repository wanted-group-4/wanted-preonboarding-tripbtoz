import React from 'react';
import styled from 'styled-components';
import MobileHeader from '@components/modal/MobileHeader';
import { ISearchData } from '@type/search';
interface ICalendarModal {
  isOpenModal: { [key: string]: boolean };
  handleModal: (key: string, value: boolean) => void;
  searchData: ISearchData;
  setSearchData: React.Dispatch<React.SetStateAction<ISearchData>>;
}

function GuestReservation({
  isOpenModal,
  handleModal,
  searchData,
  setSearchData,
}: ICalendarModal) {
  const { adult, kid } = searchData.occupancy;

  const handleCountMinus = e => {
    const { name } = e.target;
    if (searchData.occupancy[name] <= 0) return;
    setSearchData({
      ...searchData,
      occupancy: {
        ...searchData.occupancy,
        [name]: searchData.occupancy[name] - 1,
      },
    });
  };

  const handleCountPlus = e => {
    const { name } = e.target;
    setSearchData({
      ...searchData,
      occupancy: {
        ...searchData.occupancy,
        [name]: searchData.occupancy[name] + 1,
      },
    });
  };

  const initialization = () => {
    setSearchData({
      ...searchData,
      occupancy: { adult: 0, kid: 0 },
    });
  };

  const handlefocusOut = e => {
    if (e.target.id === 'background') handleModal('focus', false);
  };

  return (
    <>
      <Background
        id="background"
        isOpenModal={isOpenModal.occupancy}
        onClick={handlefocusOut}
      >
        <Container>
          <MobileHeader handleModal={handleModal} />
          <SectionBox>
            <FirstSection>
              <AgeGroup>성인</AgeGroup>
              <CountBox>
                <Count name="adult" onClick={handleCountMinus}>
                  -
                </Count>
                <Number> {adult}명 </Number>
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
                <Number> {kid}명 </Number>
                <Count name="kid" onClick={handleCountPlus}>
                  +
                </Count>
              </CountBox>
            </SecondSection>
          </SectionBox>
          <ButtonBox>
            <Button onClick={initialization}>초기화</Button>
            <Button Apply onClick={() => handleModal('occupancy', false)}>
              적용
            </Button>
          </ButtonBox>
        </Container>
      </Background>
    </>
  );
}
export default GuestReservation;

const Background = styled.div<{ isOpenModal: boolean }>`
  display: ${({ isOpenModal }) => (isOpenModal ? 'block' : 'none')};
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const Container = styled.div`
  position: absolute;
  width: 319px;
  height: 190px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  z-index: 100;
  top: 205px;
  right: 0;
  top: 70px;
  @media ${({ theme }) => theme.deviceSize.tablet} {
    top: 145px;
  }
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
  @media ${({ theme }) => theme.deviceSize.middle} {
    font-size: 22px;
    width: 60px;
    font-weight: 600;
  }
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
    position: fixed;
    left: 0;
    bottom: 0;
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
