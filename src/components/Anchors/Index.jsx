import React from 'react';

function Anchors ({ className, links }) {
  return (
    
    <div className= {className} >
      {
        links?.map(link => (
          <a className="text-center text-xl mr-2 ml-3 mt-5 sm:flex" href={link.href} key={link.id}>{link.title}</a>
        ) )
      }
    </div>
  )
}

export default Anchors;