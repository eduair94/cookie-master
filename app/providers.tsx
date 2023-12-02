'use client';

import { Layout } from '@/components/layouts';
import { ThemeLayout } from '@/components/layouts/ThemeLayout';
import { UIProvider } from '@/context/ui';
import { CssBaseline } from '@mui/material';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  theme: 'dark' | 'light' | 'custom';
}

export const Providers: FC<Props> = ({ children, theme }) => {
  return (
    <UIProvider theme={theme}>
      <ThemeLayout>
        <CssBaseline />
        <Layout>{children}</Layout>
      </ThemeLayout>
    </UIProvider>
  );
};
