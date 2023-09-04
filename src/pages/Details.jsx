import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CityAsync } from '../Store/actions/citiesActions';
import City from '../components/City/Index';


const Index = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const city = useSelector(store => store.cities.city)

    useEffect(() => {
        dispatch (CityAsync(id));
    }, [] );


    return (

    <div>
        { city ?<section className= 'flex flex-wrap flex-row'>
                    { cities.map((item) => (
                        <City key={item._id} name={item.name} country={item.country} location={item.location} image={item.img} description={item.description} price={item.price} date={item.date}/>
                    ) ) }

                </section> : <h4> under construction </h4>}
    </div>
    );
};

export default Index;