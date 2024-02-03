import React from 'react'
import { NavBar, FooterBar} from '../core';
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NavBar />
      {children}
      <FooterBar />
    </>
  )
}
export default Layout