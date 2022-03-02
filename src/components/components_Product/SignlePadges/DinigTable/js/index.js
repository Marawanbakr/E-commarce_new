import React from 'react'
// Main Padge
import DiningTable from './DiningTable'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrDiningTable from './../Headr_DiningTable'

const Index = () => {
  return (
    <>
      <Nav />
      <HeadrDiningTable />
      <DiningTable />
      <Footer />
    </>
  )
}

export default Index
