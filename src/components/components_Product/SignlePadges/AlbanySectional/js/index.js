import React from 'react'
// Main Padge
import AlbanySectional from './AlbanySectional'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrAlbanySectional from '../Headr_AlbanySectional'

const Index = () => {
  return (
    <>
      <Nav />
      <HeadrAlbanySectional />
      <AlbanySectional />
      <Footer />
    </>
  )
}

export default Index
