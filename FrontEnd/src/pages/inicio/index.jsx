import { ThemeProvider } from '@mui/system';
import React, {useEffect} from 'react';
import Appbar from '../../module/appbar/appbar';
import InicioContainer from '../../module/home-container/index'
import InicioBanner from '../../module/bannerModule';
import InicioPromotion from '../../module/promotionModule';
import theme from "../../styles/theme";
import InicioFooter from '../../module/footerModule'
import InicioDrawer from '../../module/drawerModule'
import {UIProvider} from '../../context/ui'
import InicioSearchBox from '../../module/searchModule'



const Inicio = () => {

  useEffect(()=>{
    document.title = "MAPLE SHOP - Home"

  },[]);

  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
      <Appbar />
      <InicioBanner />
      <InicioPromotion />     
      <InicioContainer />
      <InicioFooter />
      <InicioDrawer />
      <InicioSearchBox />
      </UIProvider>
    </ThemeProvider>         
  )
}

export default Inicio