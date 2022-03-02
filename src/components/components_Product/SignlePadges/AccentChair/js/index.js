import React from 'react'
// Main Padge
import AccentChair from './AccentChair'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrAccentChair from '../Headr_AccentChair'

const Index = () => {
  return (
    <>
      <Nav />
      <HeadrAccentChair />
      <AccentChair />
      <Footer />
    </>
  )
}

export default Index
