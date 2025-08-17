import React from 'react'
import { CarRental } from '@mui/icons-material'
import { Card, CardContent, Typography, CardActions, Container } from '@mui/material'

export const Tablero = () => {
  return (
    <>
      <Card sx={ { minWidth: '20%', maxWidth: "25%" } }>
      <CardContent>
        <Container sx={{ display: 'flex', gap: '1em' }}> 
         <CarRental color='success'/>
        <Typography component="h2" variant='h5' sx={{ fontWeight: 'bold', color: 'text.primary' }}>
          Benevolent
        </Typography>
        </Container>
        <Typography component='p' sx={{ color: 'text.secondary', mb: 1 }}>Lorem adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
        <span>Tareas</span>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '1em' }}>
        <button style={{ width: '100%'}} className='btn-celeste'>Abrir Tablero</button>
      </CardActions>
    </Card>
    </>
  )
}
