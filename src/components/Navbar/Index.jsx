import React from 'react';
import Anchors from '../Anchors/Index';
import Login from '../Login/Index';
import Logout from '../Logout/Index'



function Navbar () {
    let data = [

      {href:'inicio.html', description:'My Tinerary'},
      {href:'home.html', description:'Home'},
      {href:'cities.html', description:'Cities'},
    ]

    return (

      <nav className="navbar flex items-center justify-between border-b">

        {data.map((each, key)=><Anchors key={key} href={each.href} description={each.description} />)}

        <Login />

        <Logout />

      </nav>
  );
}

export default Navbar;