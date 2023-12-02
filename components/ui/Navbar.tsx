import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import NextLink from 'next/link';

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Link component={NextLink} href="/" passHref>
          <Typography variant="h6" color="white">
            CookieMaster
          </Typography>
        </Link>
        <div style={{ flex: 1 }}></div>
        <Link component={NextLink} href="/theme-changer" passHref>
          <Typography variant="h6" color="white">
            Change Theme
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
