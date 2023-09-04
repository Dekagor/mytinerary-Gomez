import "./Style"
import React from 'react'



function Cards ({id, image, name, country, location, date, price}) {


    return (
        <>
        <div className="flex-basis-1/3 w-1/3 p-2 mb-8">
            <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={id}>
                <img className="object-cover w-full h-48" src= {image} alt="image"/>
                <div className="p-4 lg:col-span-1 md:col-span-2">
                    <h4 className="text-xl font-semibold text-blue-600">{name}</h4>
                    <p className="mb-2 leading-normal">{country}</p>
                    <p className="mb-2 leading-normal">{location}</p>
                    <p className="mb-2 leading-normal">{date}</p>
                    <p className="mb-2 leading-normal">{price}</p>
                    <button className="w-full ml-0 align items-center px-4 py-2 text-sm text-blue-100 bg-zinc-600 rounded shadow">
                        Read more
                    </button>
                </div>
            </div>
        </div>
        </>
          );
  }

  export default Cards;