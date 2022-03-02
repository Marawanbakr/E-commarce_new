import React from 'react'
// Main Padge
import LatherChair from './LatherChair'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrLatherChair from '../Headr_LatherChair'

const Index = () => {
  return (
    <>
      <Nav />
      <HeadrLatherChair />
      <LatherChair />
      <Footer />
    </>
  )
}

export default Index
