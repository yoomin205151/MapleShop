import React from 'react'
import {ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from '../../styles/appbarStyle'
import { Divider, ListItemButton, ListItemIcon } from '@mui/material'
import ShoppingCardIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SearchIcon from '@mui/icons-material/Search';
import {Colors} from '../../styles/theme'
import { useUIContext } from '../../context/ui';


const Action = ({matches}) => {

  const Component = matches
  ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

  const {setShowSearchBox } = useUIContext()

  return (
    <Component>
      <MyList type= "row">

      <ListItemButton
          sx = {{
            justifyContent: "center",            
          }}
        >
            <ListItemIcon
              sx = {{
                display: "flex",
                justifyContent: "center",  
                color: matches && Colors.logocolor          
              }}
            >
                <SearchIcon onClick={()=> setShowSearchBox(true) } />
            </ListItemIcon>
        </ListItemButton>       
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx = {{
            justifyContent: "center",            
          }}
        >
            <ListItemIcon
              sx = {{
                display: "flex",
                justifyContent: "center",   
                color: matches && Colors.logocolor         
              }}
            >
                <ShoppingCardIcon />
            </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />

        <ListItemButton
          sx = {{
            justifyContent: "center",            
          }}
        >
            <ListItemIcon
              sx = {{
                display: "flex",
                justifyContent: "center",  
                color: matches && Colors.logocolor          
              }}
            >
                <PersonIcon />
            </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        
        
        <ListItemButton
          sx = {{
            justifyContent: "center",            
          }}
        >
            <ListItemIcon
              sx = {{
                display: "flex",
                justifyContent: "center",  
                color: matches && Colors.logocolor          
              }}
            >
                <FavoriteIcon />
            </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
    </MyList>
    </Component>
    
  )
}

export default Action;