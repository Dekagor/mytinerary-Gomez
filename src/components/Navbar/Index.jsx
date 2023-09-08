import React from 'react';
import Anchors from '../Anchors/Index';
import Login from '../Login/Index';
import { LINKSHOME, LINKSLOG } from '../../utils/enums';



function Navbar () {

    return (
      <nav>
        <Anchors className = 'navbar max-w-7xl mx-auto flex items-center justify-evenly border-b' links={LINKSHOME}/>
        <Login className = 'navbar max-w-7xl mx-auto flex items-end justify-end mr-20 border-b'links={LINKSLOG}/>
      </nav>
  );
}

export default Navbar;