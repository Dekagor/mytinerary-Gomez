import React from 'react';



function Index ({id, img, name, country, location, date1, date2, price1, price2, description, about1, about2, included1, included2, itinerary1, itinerary2, notincluded1, notincluded2}) {



  return (
<>
<div
  className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" key={id}>
  <img className="rounded-lg" src={img}  alt="" />
  <div className="absolute top-0 p-6">
    <h5 className="mb-2 text-xl font-medium leading-tight text-white">{name}</h5>
    <h3 className="mb-2 text-xl font-medium leading-tight text-white">{country}</h3>
    <h2 className="mb-2 text-xl font-medium leading-tight text-white">{location}</h2>
    <p className="mb-4 text-base text-white">{description}</p>
  </div>
</div>


<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{itinerary1}</div>
    <p className="text-gray-700 text-base">{about1}</p>
    <p className="text-gray-700 text-base">{date1}</p>
    <p className="text-gray-700 text-base">{price1}</p>
    <p className="text-gray-700 text-base">{included1}</p>
    <p className="text-gray-700 text-base">{notincluded1}</p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>


<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{itinerary2}</div>
    <p className="text-gray-700 text-base">{about2}</p>
    <p className="text-gray-700 text-base">{date2}</p>
    <p className="text-gray-700 text-base">{price2}</p>
    <p className="text-gray-700 text-base">{included2}</p>
    <p className="text-gray-700 text-base">{notincluded2}</p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>


</>
  );
};

export default Index;



