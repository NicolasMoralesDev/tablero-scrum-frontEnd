
import { ArrowLeft } from '@mui/icons-material'
import { Button, Container } from '@mui/material'
import Image from 'next/image'
import error from './pagina404.png'
import Link from 'next/link'
import { Metadata } from 'next';

export const metadata : Metadata = {
  title: 'Página no encontrada',
  description: 'Error pagina no encontrada',
};

export default function NotFound() {

  return (
    <Container sx={{ mt:20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80%', gap: 5 }}>
     <Image 
      alt='fondo de pagina 404'
      placeholder='blur'
      height={ 500 }
      width={ 900 } 
      src={ error }/>
      <Link href='/tableros' style={{ textDecoration: 'none' }}>
        <Button variant='contained' startIcon={ <ArrowLeft /> } >
          Volver al inicio
        </Button>
      </Link>
    </Container>
  )
}