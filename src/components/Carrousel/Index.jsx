import React, { useState } from 'react';
import Snapshot from '../Snapshot/Index'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';


function Carrousel() {
  let data = [
    {photo: '/public/Mundo/El Partenon Grecia.jpg', id: 0, name:'El Partenon', location: 'Grecia'},
    {photo: '/public/Mundo/La Muralla China.jpg', id: 1, name:'El Partenon', location: 'China'},
    {photo: '/public/Mundo/Machu Pichu.jpg', id: 2, name:'El Partenon', location: 'Peru'},
    {photo: '/public/Mundo/Taj Mahal.jpg', id: 3, name:'El Partenon', location: 'India'},
    {photo: '/public/Argentina/Bariloche.jpg', id: 4, name:'El Partenon', location: 'Bariloche, Argentina'},
    {photo: '/public/Argentina/Cataratas del Iguazu.jpg', id: 5, name:'El Partenon', location: 'Misiones, Argentina'},
    {photo: '/public/Argentina/Mar del Plata.jpg', id: 6, name:'El Partenon', location: 'Buenos Aires, Argentina'},
    {photo: '/public/Argentina/Montaña 7 colores.jpg', id: 7, name:'El Partenon', location: 'Jujuy, Argentina'},
    {photo: '/public/Venezuela/Colonia Tovar.jpg', id: 8, name:'La Colonia Tovar', location: 'Edo. Aragua, Venezuela'},
    {photo: '/public/Venezuela/Los Roques.jpg', id: 9, name:'Los Roques', location: 'Edo. Vargas, Venezuela'},
    {photo: '/public/Venezuela/Roraima.jpg', id: 10, name:'El Roraima', location: 'Edo. Bolivar, Venezuela'},
    {photo: '/public/Venezuela/Salto Angel.jpg', id: 11, name:'El Salto Angel', location: 'Edo. Bolivar, Venezuela'},
  ]



  return (
    <>
        <section className="grid grid-cols-1 md:grid-cols-1 gap-4 place-items-center justify-between">

            <div className="col-span-3 justify-self-center text-2xl mt-40 font-bold font-Liberation Mono mt-20">
                <p>POPULAR MYTINERARIES</p>
            </div>


            <div className="relative flex items-center p-3 m-3">
              <MdChevronLeft onClick={() => handlerBack ()} size={40}/>
              <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
                {data.map((item)=>(<img className='w-220px inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src= {item.photo} alt='/'/> ) ) }
              </div>
              <MdChevronRight onClick={() => handlerUp ()} size={40}/>
            </div>
        </section>
    </>

  )
}

export default Carrousel;