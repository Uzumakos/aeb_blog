import React from 'react';
import Header from './Header';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Analytics />
  </>
);

export default Layout;