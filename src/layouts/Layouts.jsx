import React from 'react';
import Header from '../components/Header/Index';
import Footer from '../components/Footer/Index';
import { Outlet } from 'react-router-dom';

function Layouts() {

  return (

    <>
        <Header />
        <Outlet/>
        <Footer />
    </>
  )
}

export default Layouts;