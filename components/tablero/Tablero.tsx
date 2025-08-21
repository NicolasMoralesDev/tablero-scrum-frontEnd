import React from 'react'
import { CarRental } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { Card, CardContent, Typography, CardActions, Container } from '@mui/material'

export const Tablero = () => {
  return (
    <>
      <Card sx={ { minWidth: '25%', maxWidth: "40%" } }>
      <CardContent>
        <Container sx={{ display: 'flex', gap: '1em', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}> 
         <CarRental color='success'/>
        <Typography component="h2" variant='h5' sx={{ fontWeight: 'bold', color: 'text.primary' }}>
          Benevolent
        </Typography>
        <MenuIcon sx={{ fontSize: '2rem', alignSelf: 'end' }}/>
        </Container>
        <Typography component='p' sx={{ color: 'text.secondary', mb: 1 }}>Lorem adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
        <ListAltIcon sx={{ fontSize: '2rem', color: 'text.secondary', mb: 1 }}/>
        <span>tareas</span>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '1em' }}>
        <button style={{ width: '100%'}} className='btn-celeste'>Abrir Tablero</button>
      </CardActions>
    </Card>
    </>
  )
}
