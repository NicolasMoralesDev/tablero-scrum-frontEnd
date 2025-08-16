import { Card, CardContent, Typography, CardActions } from '@mui/material'
import React from 'react'
import style from './Tablero.module.css'

export const Tablero = () => {
  return (
    <>
      <Card className={ style.card } sx={ { minWidth: 300, maxWidth: 355, minHeight: 50 } }>
      <CardContent>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <button className='btn-celeste'>Abrir Tablero</button>
      </CardActions>
    </Card>
    </>
  )
}
