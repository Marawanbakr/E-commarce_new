import React from 'react'
// Main Padge
import WoodenBed from './WoodenBed'
/* our components */
import Nav from '../../../../components_Home/nav'
import HeadrWoodenBed from '../Headr_WoodenBed'
import Footer from '../../../../components_Home/footer'
const Index = () => {
  return (
    <>
      <Nav />
      <HeadrWoodenBed />
      <WoodenBed />
      <Footer />
    </>
  )
}

export default Index
