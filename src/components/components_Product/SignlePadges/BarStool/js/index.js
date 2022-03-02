import React from 'react'
// Main Padge
import BarStore from './BarStool'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrBarStool from './../Headr_BarStore'

const Index = () => {
  return (
    <>
      <Nav />
      <HeadrBarStool />
      <BarStore />
      <Footer />
    </>
  )
}

export default Index
