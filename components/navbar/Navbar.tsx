import { AppBar, Container, 
    Toolbar, 
    Typography, 
    } from '@mui/material';
import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import { Adb as AdbIco } from '@mui/icons-material';
import Link from 'next/link';
import { VERSION } from '@/constants/version';

interface NavbarProps {
  titulo: string;
}

export const Navbar: React.FC<NavbarProps> = ({ titulo }) => {

  return (
    <nav>
        <AppBar position="static"style={{  background: 'black' }}>
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
          V { VERSION }
        </p>
      </Container> 
    </AppBar>
    </nav>
  )
}