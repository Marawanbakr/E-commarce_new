import React from 'react'
// Main Padge
import Shelf from './Shelf'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrShelf from '../Headr_Shelf'

const Index = () => {
  return (
    <>
      <Nav />
      <HeadrShelf />
      <Shelf />
      <Footer />
    </>
  )
}

export default Index
