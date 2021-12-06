import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import { MainWrapper } from '../Styled';

const Layout = () => {
  return (
    <MainWrapper>
      <Header />
      <Outlet />
    </MainWrapper>
  );
};

export default Layout;