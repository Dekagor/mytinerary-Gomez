import React from 'react';

function Anchors ({href, description}) {
  return (
    <>
      <a className="text-center text-xl mr-2 ml-3" href={href}>{description}</a>
    </>
  )
}

export default Anchors;