import React from 'react'
import Nav from '../../components/components_Home/nav'
import Landing from '../../components/components_Home/landingpadge'
import Feature from '../../components/components_Home/featuredproducts'
import Services from '../../components/components_Home/services'
import Form from '../../components/components_Home/form'
import Footer from '../../components/components_Home/footer'
import Loding from '../../components/components_Home/loading'

const MainHome = () => {
  return (
    <div>
      <Loding />
      <Nav />
      <Landing />
      <Feature />
      <Services />
      <Form />
      <Footer />
    </div>
  )
}

export default MainHome
