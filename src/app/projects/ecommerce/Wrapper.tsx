import React from 'react'
import Header from './Layout/Header'
import Footer from './layout/Footer'
import Promo from './Layout/PromoBar';
function Wrapper(props) {
  return (
    <div>
      <Header />
      <Promo />
      {props.children}
      <Footer />
    </div>
  )
}

export default Wrapper