import { ThemesType } from '@/interfaces';
import { cookies } from 'next/headers';

const validThemes = ['light', 'dark', 'custom'];

export const getTheme = (): ThemesType => {
  let theme = cookies().get('theme')?.value || 'dark';
  if (!validThemes.includes(theme)) theme = 'dark';
  return theme as ThemesType;
};
