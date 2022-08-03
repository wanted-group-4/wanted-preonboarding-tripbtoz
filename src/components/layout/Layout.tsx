import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@components/layout/Header';

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
}

export default Layout;

const LayoutContainer = styled.div`
  width: 900px;
  padding: 25px 30px;
  margin: 0 auto;
  @media ${({ theme }) => theme.deviceSize.tablet} {
    width: 100%;
  }
`;

const Main = styled.main``;
