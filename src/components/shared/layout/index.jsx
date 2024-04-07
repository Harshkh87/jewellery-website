import React from 'react'
import Footer from '../footer/index'
// import Navbar from '../navbar/index'
import Navbar1 from '../navbar1/index'

function Layout({ children }) {
  return(
  <div style={{    textAlign:"-webkit-center"}}>
    <div 
    style={{
      maxWidth: '2000px'
    }}
    >
      {/* <Navbar /> */}
      <Navbar1 />
      <div >
        {children}
      </div>
      <Footer />
    </div>
  </div>
  )
}

export default Layout