import React from 'react';

function Login ({ className, links }) {


  return (

    <div className = {className} >

{
        links?.map( link => (
          <a href={link.href} key={link.id}>{link.title}</a>
        ) )
      }

      <button><img src="https://www.pngitem.com/pimgs/m/307-3076978_icono-persona-png-transparent-png.png" className="w-10 h-10 -mt-8 sm:flex"/></button>
    </div>
  )
}

export default Login;