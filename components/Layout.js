import React from 'react'
import Navbar from '../components/Nav/Navbar.jsx'
import Footer from './Footer.jsx'

const Layout = ({children}) => {
  return (
      <>
      <Navbar/>
      <div>{children}</div>
      <Footer/>
      </>
    
  )
}

export default Layout