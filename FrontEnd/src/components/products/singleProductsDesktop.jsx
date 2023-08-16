import React, { useState } from 'react'
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../styles/products'
import ProductMeta from './productMeta'
import { Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import useDialogModal from '../../hooks/useDialogModal'
import ProductDetail from '../productDetail'

const SingleProductsDesktop = ({product, matches}) => {

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  }

  const handleMouseLeave = () => {
    setShowOptions(false);
  }

  const [ProducDetailDialog, showProductDetailDialog , closeProductDetailDialog] = useDialogModal(ProductDetail);

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProductImage src={product.image} /> 
            <ProductFavButton isFav={0}>
            <FavoriteIcon />
            </ProductFavButton>

            {showOptions && <ProductAddToCart show={showOptions} variant='contained'>
              Add To Cart  
            </ProductAddToCart>}          
          <ProductActionsWrapper show={showOptions}>
            <Stack direction="column">
              <ProductActionButton>
                <ShareIcon color="terciary" />
              </ProductActionButton>
              <ProductActionButton onClick={()=> showProductDetailDialog()}>
                <FitScreenIcon color="terciary" />
              </ProductActionButton>
            </Stack>
          </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
      <ProducDetailDialog product={product}/>
    </>
  )
}

export default SingleProductsDesktop