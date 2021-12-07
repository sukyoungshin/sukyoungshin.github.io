import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import { LayoutWrapper } from '../Styled';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;