import React from 'react';
import styled from 'styled-components';
import MobileHeader from '@components/modal/MobileHeader';
import { ISearchData } from '@type/search';
import { useLocation } from 'react-router-dom';

interface IGuestReservationModal {
  isOpenModal: { [key: string]: boolean };
  handleModal: (key: string, value: boolean) => void;
  searchData: ISearchData;
  setSearchData: React.Dispatch<React.SetStateAction<ISearchData>>;
  handleSearch: () => void;
}

function GuestReservation({
  isOpenModal,
  handleModal,
  searchData,
  setSearchData,
  handleSearch,
}: IGuestReservationModal) {
  const { adult, kid } = searchData.occupancy;
  const { pathname } = useLocation();

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
      occupancy: { adult: 2, kid: 0 },
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
        pathname={pathname}
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
            <Button Apply onClick={handleSearch}>
              적용
            </Button>
          </ButtonBox>
        </Container>
      </Background>
    </>
  );
}
export default GuestReservation;

const Background = styled.div<{ isOpenModal: boolean; pathname: string }>`
  display: ${({ isOpenModal }) => (isOpenModal ? 'block' : 'none')};
  position: ${({ pathname }) => (pathname === '/' ? 'fixed' : 'absolute')};
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
  top: 195px;
  right: 50%;
  transform: translateX(+390px);
  @media ${({ theme }) => theme.deviceSize.middle} {
    transform: none;
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
  padding: 20px;
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
    padding-top: 1px;
    font-size: 5vw;
    width: 20vw;
  }
`;
const Age = styled.div`
  color: ${({ theme }) => theme.color.grey_03};
  position: relative;
  left: -35px;
  font-size: 12px;
  @media ${({ theme }) => theme.deviceSize.middle} {
    font-size: 3vw;
    flex: 1 1 auto;
    left: -20px;
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
  @media ${({ theme }) => theme.deviceSize.middle} {
    font-size: 5vw;
    width: 10vw;
  }
`;
const Number = styled.span`
  display: inline-block;
  width: 50px;
  text-align: center;
  @media ${({ theme }) => theme.deviceSize.middle} {
    font-size: 4vw;
    width: 10vw;
  }
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
