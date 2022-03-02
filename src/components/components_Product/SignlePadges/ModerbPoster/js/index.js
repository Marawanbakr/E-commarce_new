import React from 'react'
// Main Padge
import ModernPoster from './ModernPoster'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrModern from '../headr_Modern'

const index = () => {
  return (
    <>
      <Nav />
      <HeadrModern />
      <ModernPoster />
      <Footer />
    </>
  )
}

export default index
