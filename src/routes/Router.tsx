import React from 'react';
import { Route, Routes } from 'react-router';

import Layout from '@components/layout/Layout';
import Search from '@pages/Search';
import Detail from '@pages/Detail';
import MyPage from '@pages/MyPage';
import ConfirmReservation from '@src/components/modal/ConfirmReservation';

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ConfirmReservation />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/my_page" element={<MyPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
