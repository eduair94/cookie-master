'use client';

import { ThemesType, UIActionEnum } from '@/interfaces';
import Cookies from 'js-cookie';
import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from '.';

export interface UIState {
  theme: ThemesType;
}

const UI_INITIAL_STATE: UIState = {
  theme: 'dark',
};

interface Props {
  children: ReactNode;
  theme: ThemesType;
}

export const UIProvider: FC<Props> = ({ children, theme }) => {
  UI_INITIAL_STATE.theme = theme;
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const setTheme = (theme: ThemesType) => {
    localStorage.setItem('theme', theme);
    Cookies.set('theme', theme);
    dispatch({ type: UIActionEnum.SET_THEME, payload: theme });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        setTheme,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
