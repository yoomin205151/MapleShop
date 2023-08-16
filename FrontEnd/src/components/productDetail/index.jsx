import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import {Colors} from '../../styles/theme'
import CloseIcon from '@mui/icons-material/Close'
import {styled} from '@mui/system'
import { useTheme } from '@emotion/react'
import { Product, ProductImage } from '../../styles/products'
import Incdec from '../ui/index'
import FavoriteIcon from "@mui/icons-material/Favorite";


function SlideTransition(props) {
    return <Slide direction='down' {...props} />
}

const Index = ({open, onClose, product}) => {

const ProductDetailWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    padding: theme.spacing(4)
}));

const ProductDetailInfoWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: 1.5
}));

const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
        TransitionComponent={SlideTransition}
        variant="permanat"
        open={open}
        fullScreen
    >
        <DialogTitle sx={{
            background: Colors.logocolor
        }}>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}  
                color={`${Colors.white}`}              
            >
                Product Title
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ProductDetailWrapper flexDirection={matches? 'column' : 'row'}>
                <Product sx={{
                    mr:4
                }}>
                    <ProductImage src={product.image} />
                </Product>
                <ProductDetailInfoWrapper>
                    <Typography variant='subtitle1'>Remera</Typography>
                    <Typography variant='subtitle1'>Availability: 100 in stock</Typography>
                    <Typography sx={{ lineHeight:2}} variant='h4'>{product.name}</Typography>
                    <Typography variant='body'>
                        {product.description}
                        {product.description}
                        {product.description}
                    </Typography>
                    <Box 
                        sx={{mt:4}}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Incdec />
                        <Button variant='contained'>Add to cart</Button>
                    </Box> 
                    <Box
                        display="flex"
                        alignItems="center"
                        sx={{ mt: 4, color: Colors.light }}
                        >
                        <FavoriteIcon sx={{ mr: 2 }} />
                        Add to wishlist
                    </Box>                       
                </ProductDetailInfoWrapper>
            </ProductDetailWrapper>
        </DialogContent>
    </Dialog>
  )
}

export default Index