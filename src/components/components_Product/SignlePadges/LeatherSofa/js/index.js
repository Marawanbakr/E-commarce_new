import React from 'react'
// Main Padge
import LeatherSofa from './LeatherSofa'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrLeatherSofa from '../Headr_LeatherSofa'

const Index = () => {
  return (
    <>
      <Nav />
      <HeadrLeatherSofa />
      <LeatherSofa />
      <Footer />
    </>
  )
}

export default Index
