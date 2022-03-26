import React, { FC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Typography, useTheme, Toolbar } from '@mui/material';

import PATHS from 'constants/routes-paths';
import { AppBarLogo, AppBarStyled, LogoLink } from './NavBar.styles';

export interface NavBarLink {
  text: string;
  linkTo: string;
}

export type NavBarLinks = Array<NavBarLink>;

export interface NavBarProps {
  links?: NavBarLinks;
}

const NavBar: FC<NavBarProps> = ({ links }) => {
  // const history = useHistory();
  const theme = useTheme();

  // useLayoutEffect(() => {
  //   if (!user) return history.push(paths.LANDING_PAGE);
  // }, [user, history]);

  return (
    <AppBarStyled position='relative' color='primary' elevation={0}>
      <Toolbar>
        <Grid container direction='row' alignItems='center' justifyContent='space-between'>
          {/* Logo */}
          <Grid item xs='auto'>
            <LogoLink to={PATHS.welcome} style={{ textDecoration: 'none' }}>
              <Grid container item justifyContent='flex-start' alignItems='center'>
                <AppBarLogo>
                  <Typography color='inherit'>Test App</Typography>
                </AppBarLogo>
              </Grid>
            </LogoLink>
          </Grid>
          {/* Navbar Links */}
          {links && (
            <Grid item xs>
              <Box ml={5}>
                <Grid container direction='row' justifyContent='flex-start' alignItems='center'>
                  {links.map((link: NavBarLink) => (
                    <Grid item sm='auto' key={JSON.stringify(link)}>
                      <Box mr={5}>
                        <RouterLink to={link.linkTo}>
                          <Typography variant='h6' component='span' color='inherit'>
                            {link.text}
                          </Typography>
                        </RouterLink>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBarStyled>
  );
};

export default memo(NavBar);