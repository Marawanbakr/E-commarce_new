import React from 'react'
// Main Padge
import AlbanyTable from './AlbanyTable'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrAlbanyTable from '../Headr_AlbanyTable'

const Index = () => {
  return (
    <>
      <Nav />
      <HeadrAlbanyTable />
      <AlbanyTable />
      <Footer />
    </>
  )
}

export default Index
