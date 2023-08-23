import React from 'react';

function Article ({title, text}) {
  
  return (
    <>
      <>
        <div className="col-span-3 leading-8 items-center text-center w-full">
          <span className='col-span-3 justify-self-center text-2xl font-bold font-Liberation Mono'>{title}</span>
          <p className='col-span-3 justify-self-center mt-2'>{text}</p>
          <button type="button" className="col-span-3 justify-self-center bg-gray-400 p-1 rounded h-9 mr-10 ml-6 w-8/12 mt-8">see more</button>
        </div>
      </>
    </>
  )
}

export default Article;