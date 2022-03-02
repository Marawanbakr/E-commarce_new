import React from 'react'
// Main Padge
import Armchair from './Armchair'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrArmchair from '../Headr_Armchair'

const Index = () => {
  return (
    <>
      <Nav />
      <HeadrArmchair />
      <Armchair />
      <Footer />
    </>
  )
}

export default Index
