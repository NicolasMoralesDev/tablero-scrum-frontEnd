
import { Tablero } from '@/components/tablero/Tablero';
import { Container } from '@mui/material';
import { Metadata } from 'next';
import React from 'react'

export const metadata : Metadata = {
 title: 'Poyectos',
 description: 'Listado de proyectos scrum creados',
};

const tableros = () => {
  return (
      <>
      <h1>Tableros Scrum</h1>
      <Container maxWidth="s" sx={{ mt: 4, mb: 4, gap: 5, display: 'flex', alignItems: 'center', flexFlow: 'wrap', justifyContent: 'space-evenly' }}>
        
        <Tablero />
        <Tablero />
        <Tablero />
        <Tablero />
        <Tablero />
        <Tablero />

      </Container>
      </>
  )
}

export default tableros