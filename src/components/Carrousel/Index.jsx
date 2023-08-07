import React, { useState } from 'react';
import Snapshot from '../Snapshot/Index'
import Slide from '../Slide/Index';

function Carrousel() {
  let data = [
    {photo: '/public/Mundo/El Partenon Grecia.jpg', id: 0},
    {photo: '/public/Mundo/La Muralla China.jpg', id: 1},
    {photo: '/public/Mundo/Machu Pichu.jpg', id: 2},
    {photo: '/public/Mundo/Taj Mahal.jpg', id: 3},
    {photo: '/public/Argentina/Bariloche.jpg', id: 4},
    {photo: '/public/Argentina/Cataratas del Iguazu.jpg', id: 5},
    {photo: '/public/Argentina/Mar del Plata.jpg', id: 6},
    {photo: '/public/Argentina/Montaña 7 colores.jpg', id: 7},
    {photo: '/public/Venezuela/Colonia Tovar.jpg', id: 8},
    {photo: '/public/Venezuela/Los Roques.jpg', id: 9},
    {photo: '/public/Venezuela/Roraima.jpg', id: 10},
    {photo: '/public/Venezuela/Salto Angel.jpg', id: 11},
  ]

  return (
    <>
        <section className="grid grid-cols-1 md:grid-cols-1 gap-4 place-items-center justify-between">

            <div className="col-span-3 justify-self-center text-2xl mt-40 font-bold font-Liberation Mono mt-20">
                <p>POPULAR MYTINERARIES</p>
            </div>

            <div className="grid grid-cols-2 gap-10 place-items-center justify-between p-4 m-4">
            {data.map((each, key)=><Snapshot key={key} photo={each.photo} id={each.id}/>)}

            </div>

        </section>

        <>
          <Slide />
        </>
    </>

  )
}

export default Carrousel;