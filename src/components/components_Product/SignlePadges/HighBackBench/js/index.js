import React from 'react'
// Main Padge
import HighBackBench from './High-BackBench'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrHighBackBench from '../Headr_High-BackBench'

const Index = () => {
  return (
    <>
      <Nav />
      <HeadrHighBackBench />
      <HighBackBench />
      <Footer />
    </>
  )
}

export default Index
