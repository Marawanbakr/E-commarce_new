import React from 'react'
// Main Padge
import VaseTable from './VaseTable'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrVaseTable from '../Headr_VaseTable'

const Index = () => {
  return (
    <>
      <Nav />
      <HeadrVaseTable />
      <VaseTable />
      <Footer />
    </>
  )
}

export default Index
