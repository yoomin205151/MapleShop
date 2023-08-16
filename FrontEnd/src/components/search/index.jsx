import { IconButton, Slide } from '@mui/material';
import React from 'react'
import { SearchBoxContainer, SearchField } from '../../styles/searchBox';
import { useUIContext } from '../../context/ui';
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const Index = () => {

    const { showSearchBox, setShowSearchBox } = useUIContext();

  return (
    <Slide direction='down' in={showSearchBox} timeout={500}>
        <SearchBoxContainer>
            <SearchField
                color='secondary'
                variant='standard'
                fullWidth
                placeholder='search....'
            />
            <IconButton>
                <SearchIcon 
                    sx={{
                        fontSize: {xs: '2rem', md: '3rem'}
                    }}
                    color='secondary'
                />
            </IconButton>
            <IconButton
                onClick={()=> setShowSearchBox(false)}
                sx={{
                    position: 'absolute',
                    top: 10,
                    right:10
                }}
            >
                <CloseIcon
                    sx={{
                        fontSize:'4rem'                      
                    }}
                    color='secondary'
                />
            </IconButton>
        </SearchBoxContainer>
    </Slide>
  )
}

export default Index