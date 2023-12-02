'use client';
import { UIContext } from '@/context/ui';
import { customTheme, darkTheme, lightTheme } from '@/themes';
import { ThemeProvider } from '@mui/material';
import { FC, ReactNode, useContext } from 'react';

const themes = {
  dark: darkTheme,
  light: lightTheme,
  custom: customTheme,
};

export const ThemeLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useContext(UIContext);
  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};
