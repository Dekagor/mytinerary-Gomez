import React from 'react';

function Article ({title, text}) {
  
  return (
    <>
      <>
        <div className="col-span-3 leading-8 items-center text-center">
          <span className='col-span-3 justify-self-center text-2xl font-bold font-Liberation Mono'>{title}</span>
          <p className='col-span-3 justify-self-center mt-2'>{text}</p>
          <button type="button" className="col-span-3 justify-self-center bg-gray-400 p-1 rounded w-450 h-9 mr-12 mt-8">see more</button>
        </div>
      </>
    </>
  )
}

export default Article;