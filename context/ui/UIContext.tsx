'use client';

import { ThemesType } from '@/interfaces';
import { createContext } from 'react';

interface ContextProps {
  setTheme: (theme: ThemesType) => void;
  theme: ThemesType;
}

export const UIContext = createContext({} as ContextProps);
