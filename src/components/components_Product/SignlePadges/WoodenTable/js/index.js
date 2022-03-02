import React from 'react'
// Main Padge
import WoodenTable from './WoodenTable'
/* our components */
import Nav from '../../../../components_Home/nav'
import HeadrWoodenTable from '../Headr_WoodenTable'
import Footer from '../../../../components_Home/footer'
const Index = () => {
  return (
    <>
      <Nav />
      <HeadrWoodenTable />
      <WoodenTable />
      <Footer />
    </>
  )
}

export default Index
