"use client";
import { AppBar, Container, 
    Toolbar, 
    Typography, 
    Box, 
    IconButton, 
    Menu, 
    MenuItem, 
    Button, 
    Tooltip,
    Avatar } from '@mui/material';
import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { Adb as AdbIco } from '@mui/icons-material';
import Link from 'next/link';

interface NavbarProps {
  titulo: string;
}

export const Navbar: React.FC<NavbarProps> = ({ titulo }) => {


/*   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null); */

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
   /*  setAnchorElNav(event.currentTarget); */
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
/*     setAnchorElUser(event.currentTarget); */
  };

  const handleCloseNavMenu = () => {
 /*    setAnchorElNav(null); */
  };

  const handleCloseUserMenu = () => {
/*     setAnchorElUser(null); */
  };

  return (
    <nav>
        <AppBar position="static">
      <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Toolbar disableGutters>
          <AdbIco sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link href="/" style={{  color: 'inherit' }}>
              { titulo }
            </Link>
          </Typography>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

         
        </Toolbar>
       <p>
          V 1.0.0
        </p>
      </Container> 
    </AppBar>
    </nav>
  )
}