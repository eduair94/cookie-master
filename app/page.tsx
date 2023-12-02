'use client';
import { UIContext } from '@/context/ui';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useContext } from 'react';

export default function Home() {
  const { theme } = useContext(UIContext);
  return (
    <div>
      <Typography component="h1" variant="h3" sx={{ marginBottom: 2 }}>
        Current theme is: <em>{theme}</em>
      </Typography>
      <Button href="/theme-changer" component={Link} variant="outlined">
        Change Theme
      </Button>
    </div>
  );
}
