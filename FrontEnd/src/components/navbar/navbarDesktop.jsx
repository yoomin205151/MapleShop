import React from 'react';
import { ListItemText } from '@mui/material';
import { AppbarContainer, AppbarHeader, AppbarLinks, Logo, MyList } from '../../styles/appbarStyle';
import LogoImagen from '../../assets/logo.png';
import Action from './action';

const NavbarDesktop = ({ matches }) => {


  return (   
      <AppbarContainer>     
      <AppbarHeader>
        <Logo src={
          LogoImagen                   
          } alt="Logo" className="logo" />
          Maple
      </AppbarHeader>
      <MyList type="row">
        <AppbarLinks href="/products">
          <ListItemText primary="Home" />
        </AppbarLinks > 
        <AppbarLinks href="/products">
          <ListItemText primary="Categories" />
        </AppbarLinks >
        <AppbarLinks href="/products">
          <ListItemText primary="Products" />
        </AppbarLinks >
        <AppbarLinks href="/products">
          <ListItemText primary="Contact Us" />
        </AppbarLinks >                
        {/* <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" /> */}
      </MyList>
      <Action matches={matches} />
    </AppbarContainer>
    
  )
}

export default NavbarDesktop;