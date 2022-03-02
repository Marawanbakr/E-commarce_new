import React from 'react'
// Main Padge
import EmperorBed from './EmperorBed'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrEmperorBed from '../Headr_EmperorBed'

const Index = () => {
  return (
    <>
      <Nav />
      <HeadrEmperorBed />
      <EmperorBed />
      <Footer />
    </>
  )
}

export default Index
