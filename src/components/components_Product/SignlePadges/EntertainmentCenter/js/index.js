import React from 'react'
// Main Padge
import EntertainmentCenter from './EntertainmentCenter'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrEntertainmentCenter from './../Headr_EntertainmentCenter'

const Index = () => {
  return (
    <>
      <Nav />
      <HeadrEntertainmentCenter />
      <EntertainmentCenter />
      <Footer />
    </>
  )
}

export default Index
