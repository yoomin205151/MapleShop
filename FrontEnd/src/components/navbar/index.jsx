import React from 'react'
import {useTheme} from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import NavbarDesktop from './navbarDesktop';
import NavbarMobile from './navbarMobile';

const Index = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
        {matches ? <NavbarMobile matches={matches} /> : <NavbarDesktop matches={matches} /> }
    </>
  )
}

export default Index