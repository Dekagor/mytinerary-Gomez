import React, { useEffect, useState } from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';




let data = [
    {photo: '/public/Mundo/El Partenon Grecia.jpg', id: 0, name:'El Partenon', location: 'Grecia'},
    {photo: '/public/Mundo/La Muralla China.jpg', id: 1, name:'La Muralla China', location: 'China'},
    {photo: '/public/Mundo/Machu Pichu.jpg', id: 2, name:'Machu Pichu', location: 'Peru'},
    {photo: '/public/Mundo/Taj Mahal.jpg', id: 3, name:'Taj Mahal', location: 'India'},
    {photo: '/public/Argentina/Bariloche.jpg', id: 4, name:'Bariloche', location: 'Bariloche, Argentina'},
    {photo: '/public/Argentina/Cataratas del Iguazu.jpg', id: 5, name:'Cataratas del Iguazu', location: 'Misiones, Argentina'},
    {photo: '/public/Argentina/Mar del Plata.jpg', id: 6, name:'Mar del Plata.jpg', location: 'Buenos Aires, Argentina'},
    {photo: '/public/Argentina/Montaña 7 colores.jpg', id: 7, name:'Cerro 7 colores', location: 'Jujuy, Argentina'},
    {photo: '/public/Venezuela/Colonia Tovar.jpg', id: 8, name:'La Colonia Tovar', location: 'Edo. Aragua, Venezuela'},
    {photo: '/public/Venezuela/Los Roques.jpg', id: 9, name:'Los Roques', location: 'Edo. Vargas, Venezuela'},
    {photo: '/public/Venezuela/Roraima.jpg', id: 10, name:'El Roraima', location: 'Edo. Bolivar, Venezuela'},
    {photo: '/public/Venezuela/Salto Angel.jpg', id: 11, name:'El Salto Angel', location: 'Edo. Bolivar, Venezuela'},
  ]


function Slide() {
const [index, setIndex] = useState(0)
//moviento carrusel
const [landscapes, setLandscapes] = useState([])

const prev = () => {
    index==0 ? setIndex(8) : setIndex(index - 4)
    setLandscapes(data.slice(index, index + 4))
}

const next = () => {
    index==8 ? setIndex(0) : setIndex(index + 4)
    setLandscapes(data.slice(index, index + 4))
}

useEffect(() => {
    const interval = setInterval(() => {next()}, 6000)
    return () => {clearInterval(interval)}
},[index])


return (
    <>
        <section className="grid grid-cols-1 md:grid-cols-1 gap-4 place-items-center justify-between">
            <div className="col-span-3 justify-self-center text-2xl mt-40 font-bold font-Liberation Mono">
                <p>POPULAR MYTINERARIES</p>
            </div>

            <div className="col-span-4 flex place-content-center place-items-center justify-center">
                <MdChevronLeft onClick={() => prev ()}size={40}/>
                    <div id='slider'>
                        {landscapes.map((landscapes)=>(
                            <img key={landscapes.id} className='h-40 w-1/4 inline-block p-1 cursor-pointer hover:scale-95 ease-in-out duration-300' src= {landscapes.photo} alt='/'/> 
                        ))}
                    </div>
                <MdChevronRight onClick={() => next ()}size={40}/>
            </div>
        </section>
    </>
  )
}

export default Slide;
