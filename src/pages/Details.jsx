import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CityAsync } from '../store/actions/citiesActions';



const Index = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const cityFilter = useSelector(store => store.cities.city)

    useEffect(() => {
        dispatch (CityAsync(id));
    }, [] );

    return (


    <div>

            <section className= 'mt-8 mx-2 flex flex-wrap flex-col'>
                    {
                      <>
              <div className="flex  w-full  justify-center 0 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" key={cityFilter?.id}>
                  <img className="w-full h-96 opacity-50 rounded-lg" src={cityFilter?.img}/>
                        <div className="absolute top-12 p-6">
                          <h5 className="mb-2 my-28 text-3xl font-bold leading-tight text-white">{cityFilter?.name}</h5>
                          <h3 className="mb-2 text-xl font-medium leading-tight text-white">{cityFilter?.location}</h3>
                          <h2 className="mb-2 text-xl font-medium leading-tight text-white">{cityFilter?.country}</h2>
                          <p className="mb-4 mx-96 text-center text-base text-white">{cityFilter?.description}</p>
                        </div>
              </div>

              <div className="p-5 max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{cityFilter?.itinerary1}</div>
                <p className="text-gray-700 text-base">{cityFilter?.about1}</p>
                <p className="text-gray-700 text-base">{cityFilter?.date1}</p>
                <p className="text-gray-700 text-base">{cityFilter?.price1}</p>
                <p className="text-gray-700 text-base">{cityFilter?.included1}</p>
                <p className="text-gray-700 text-base">{cityFilter?.notincluded1}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
              </div>
              
              <div className="p-5 max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{cityFilter?.itinerary2}</div>
                <p className="text-gray-700 text-base">{cityFilter?.about2}</p>
                <p className="text-gray-700 text-base">{cityFilter?.date2}</p>
                <p className="text-gray-700 text-base">{cityFilter?.price2}</p>
                <p className="text-gray-700 text-base">{cityFilter?.included2}</p>
                <p className="text-gray-700 text-base">{cityFilter?.notincluded}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
              
            </div>

            </>
                    }

            </section >


    </div>
    );
};

export default Index;