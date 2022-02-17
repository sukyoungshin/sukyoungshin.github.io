import React from 'react';
import { Header } from 'components';
import { Outlet } from 'react-router';
import { StyledLayoutWrapper } from './Layout.style';

const Layout = () => {
  return (
    <StyledLayoutWrapper>
      <Header />
      <Outlet />
    </StyledLayoutWrapper>
  );
};

export default Layout;