import React from 'react'
import Products from '../../components/products'
import { Typography, Box} from '@mui/material'


const InicioContainer = () => {
  
  return (  
    <> 
      <Box display="flex" justifyContent={"center"} sx={{p:4}}>
        <Typography variant='h4'>Our Products</Typography>
      </Box> 
      <Products />
    </>  
  )
}

export default InicioContainer