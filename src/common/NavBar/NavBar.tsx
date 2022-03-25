import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Typography, useTheme, Link, AppBar, Toolbar } from '@mui/material';

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
    <AppBar position='relative' color='primary' elevation={0}>
      <Toolbar>
        <Grid container direction='row' alignItems='center' justifyContent='space-between'>
          {/* Logo */}
          <Grid item xs='auto'>
            <RouterLink to='/'>
              <Grid container item justifyContent='flex-start' alignItems='center'>
                any logo
              </Grid>
            </RouterLink>
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
                          <Link variant='h6' color='inherit'>
                            {link.text}
                          </Link>
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
    </AppBar>
  );
};

export default NavBar;
