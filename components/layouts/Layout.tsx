import { FC, ReactNode } from 'react';
import { Navbar } from '../ui';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '20px 50px' }}>{children}</main>
    </>
  );
};
