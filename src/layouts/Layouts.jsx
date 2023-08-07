import React from 'react';
import Header from '../components/Header/Index';
import Footer from '../components/Footer/Index';

function Layouts({children}) {

  return (

    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layouts;