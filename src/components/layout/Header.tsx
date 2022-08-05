import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      <MyPage to="/my_page">예약확인</MyPage>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 30px;
  margin-bottom: 25px;
`;

const LogoLink = styled(NavLink)``;

const Logo = styled.img.attrs({
  src: './images/logo.svg',
})``;

const MyPage = styled(NavLink)`
  text-decoration: none;
  color: #000;
`;
