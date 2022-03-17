import React from 'react'
import AltHeadr from '../../components/components_Product/alt_headr'
import Product from '../../components/components_Product/product'
import Loding from '../../components/components_Home/loading'

const productPage = () => {
  return (
    <>
      <Loding />
      <AltHeadr />
      <Product />
    </>
  )
}

export default productPage
