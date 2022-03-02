import React from 'react'
// Main Padge
import SuedeArmchair from './SuedeArmchair'
/* our components */
import Nav from '../../../../components_Home/nav'
import HeadrSuedArmchair from '../Headr_SuedeArmchair'
import Footer from '../../../../components_Home/footer'
const Index = () => {
  return (
    <>
      <Nav />
      <HeadrSuedArmchair />
      <SuedeArmchair />
      <Footer />
    </>
  )
}

export default Index
