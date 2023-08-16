import React, {useEffect} from 'react'

const Index = () => {

  useEffect(()=>{
    document.title = "MAPLE SHOP - Product"
  },[]);

  return (
    <>
        <h1>hola soy el producto</h1>
    </>
  )
}

export default Index