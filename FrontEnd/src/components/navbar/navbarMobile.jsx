import React from 'react'
import {Logo, AppbarContainer, AppbarHeader } from '../../styles/appbarStyle';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import LogoImagen from '../../assets/logo.png';
import Action from './action';
import { useUIContext } from '../../context/ui';

const NavbarMobile = ({ matches }) => {

  const { setDrawerOpen, setShowSearchBox } = useUIContext()

  return (
    <AppbarContainer>
      <IconButton onClick={()=> setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4"> 
        <Logo src={LogoImagen} alt="Logo" className="logo" />
          Maple  
      </AppbarHeader>
      <IconButton>
        <SearchIcon  onClick={()=> setShowSearchBox(true) } />
      </IconButton>
      <Action matches={matches} />
    </AppbarContainer>
  )
}

export default NavbarMobile;