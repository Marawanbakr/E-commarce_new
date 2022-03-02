import React from 'react'
// Main Padge
import WoodenDesk from './WoodenDesk'
/* our components */
import Nav from '../../../../components_Home/nav'
import HeadrWoodenDesk from '../Headr_WoodenDesk'
import Footer from '../../../../components_Home/footer'
const Index = () => {
  return (
    <>
      <Nav />
      <HeadrWoodenDesk />
      <WoodenDesk />
      <Footer />
    </>
  )
}

export default Index
