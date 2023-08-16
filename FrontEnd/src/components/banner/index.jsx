import React from 'react'
import {useTheme} from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTittle } from '../../styles/banner';
import LogoImagen from '../../assets/model.png';

const Index = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BannerContainer>      
      <BannerImage src={LogoImagen} />
      <BannerContent>        
        <Typography variant='h6'>Huge Collection</Typography>   
        <BannerTittle>
          New Product
        </BannerTittle>
        <BannerDescription variant = 'subtitle'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae, sunt quo inventore vero, voluptate quaerat 
          fugit doloribus qui nisi sequi eveniet! Adipisci quia sed, nisi delectus magni architecto aperiam.
        </BannerDescription>
        <BannerShopButton color='primary'>Show Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
    
  );
}

export default Index