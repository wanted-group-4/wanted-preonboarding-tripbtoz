import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const { pathname } = useLocation();
  return (
    <HeaderContainer pathname={pathname}>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      <MyPage to="/my_page">예약확인</MyPage>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div<{ pathname: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 30px;
  position: ${({ pathname }) => (pathname === '/' ? 'sticky' : 'static')};
  top: 0;
  background: #fff;
  z-index: 99;
`;

const LogoLink = styled(NavLink)``;

const Logo = styled.img.attrs({
  src: './images/logo.svg',
})``;

const MyPage = styled(NavLink)`
  text-decoration: none;
  color: #000;
`;
