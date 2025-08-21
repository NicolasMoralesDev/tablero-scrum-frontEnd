import { Tablero } from '@/components/tablero/Tablero'
import { Container, Typography } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
 title: 'Poyectos',
 description: 'Listado de proyectos scrum creados',
};

const tableros = () => {
  return (
    <>
      <Typography variant='h3' align='center'>Proyectos</Typography>
      <Container  maxWidth='xl' sx={{ mt: 4, mb: 4, gap: 3, display: 'flex', alignItems: 'center', justifyContent:'center', flexFlow: 'wrap' }}>
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