import React, { FC, useRef } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Box, Grid, Typography, useTheme, Link } from '@mui/material';

export interface NavBarLink {
  text: string;
  linkTo: string;
}

export type NavBarLinks = Array<NavBarLink>;

export interface NavBarProps {
  links?: NavBarLinks;
}

const NavBar: FC<NavBarProps> = ({ links }) => {
  const history = useHistory();
  const dropdownButtonRef = useRef();
  const theme = useTheme();

  // useLayoutEffect(() => {
  //   if (!user) return history.push(paths.LANDING_PAGE);
  // }, [user, history]);

  return (
    <AppBar position='relative' color='primary' elevation={0} style={{ zIndex: 1250 }}>
      <Toolbar>
        <Grid container direction='row' alignItems='center' justify='space-between'>
          {/* Logo */}
          <Grid item xs='auto'>
            <RouterLink to='/'>
              <Grid container item justify='flex-start' alignItems='center'>
                {/*<img alt='WorkRise' src={logoWhite} />*/}
              </Grid>
            </RouterLink>
          </Grid>
          {/* Navbar Links */}
          {links && (
            <Grid item xs data-cy='styled-links-grid'>
              <Box ml={5}>
                <Grid container direction='row' justify='flex-start' alignItems='center'>
                  {links.map((link: NavBarLink) => (
                    <Grid item sm='auto' key={JSON.stringify(link)}>
                      <Box mr={5}>
                        <Link variant='h6' component='a' href={link.linkTo} color='inherit'>
                          {link.text}
                        </Link>
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
