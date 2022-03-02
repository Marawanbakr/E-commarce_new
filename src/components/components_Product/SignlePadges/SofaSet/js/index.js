import React from 'react'
// Main Padge
import SofaSet from './SofaSet'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrSofaSet from '../Headr_SofaSet'

const Index = () => {
  return (
    <>
      <Nav />
      <HeadrSofaSet />
      <SofaSet />
      <Footer />
    </>
  )
}

export default Index
