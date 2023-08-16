import React from 'react'
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton,ProductImage  } from '../../styles/products'
import ProductMeta from './productMeta'
import { Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import useDialogModal from '../../hooks/useDialogModal'
import ProductDetail from '../productDetail'

const SingleProducts = ({product, matches}) => {

  const [ProducDetailDialog, showProductDetailDialog , closeProductDetailDialog] = useDialogModal(ProductDetail);

  return (
    <>
      <Product>
          <ProductImage src={product.image} />
          <ProductMeta product={product} matches={matches} />
          <ProductActionsWrapper>
            <Stack direction="row">
              <ProductFavButton isFav={0}>
                <FavoriteIcon />
              </ProductFavButton>
              <ProductActionButton>
                <ShareIcon color="terciary" />
              </ProductActionButton>
              <ProductActionButton onClick={()=> showProductDetailDialog()}>
                <FitScreenIcon color="terciary" />
              </ProductActionButton>
            </Stack>
          </ProductActionsWrapper>
      </Product>
      <ProductAddToCart variant='contained'>
        Add to Cart
      </ProductAddToCart>
      <ProducDetailDialog product={product}/>
    </>
  )
}

export default SingleProducts