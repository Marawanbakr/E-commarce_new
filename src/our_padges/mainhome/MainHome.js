import React from 'react'
import Landing from '../../components/components_Home/landingpadge'
import Feature from '../../components/components_Home/featuredproducts'
import Services from '../../components/components_Home/services'
import Form from '../../components/components_Home/form'

const MainHome = () => {
  return (
    <div>
      <Landing />
      <Feature />
      <Services />
      <Form />
    </div>
  )
}

export default MainHome
