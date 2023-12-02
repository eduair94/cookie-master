'use client';
import { UIContext } from '@/context/ui';
import { ThemesType } from '@/interfaces';
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { NextPage } from 'next';
import { ChangeEvent, useContext } from 'react';

const ContactPage: NextPage = () => {
  const { setTheme: setCurrentTheme, theme: currentTheme } =
    useContext(UIContext);

  const onChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme as ThemesType);
  };

  return (
    <Card>
      <CardContent>
        <FormControl>
          <FormLabel>Theme</FormLabel>
          <RadioGroup value={currentTheme} onChange={onChangeTheme}>
            <FormControlLabel label="Light" value="light" control={<Radio />} />
            <FormControlLabel label="Dark" value="dark" control={<Radio />} />
            <FormControlLabel
              label="Custom"
              value="custom"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default ContactPage;
