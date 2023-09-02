import React, { useEffect, useState } from 'react'
import './Style.css'
import Cards from '../Cards/Index'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { allCities, filteredCities } from '../../store/actions/citiesActions';
import { getAllCities } from '../../services/cityService';

const Input = () => {
    const [data, setData] = useState ([]);
    const [filtered, setFiltered] = useState (URL);


    const dispatch = useDispatch();


    useEffect(() => {

        getAllCities().then((cities) => {
            setData(cities);
            dispatch(allCities(cities));
        });
    },[]);


        const handleInput = () => {
            const search= select.current.value;
            let query = `?`;
            if (search) {
                query+= "name="+search
            }
            getAllCities(query).then(setData);
        }




/* const LinksCities = [
    {
    id: 0,
    name: 'Bariloche',
    country: 'Argentina',
    location: 'San Carlos de Bariloche',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/62/0c/33/lago.jpg?w=1100&h=-1&s=1',
    description: 'is a Patagonian city that, with 146,000 inhabitants (2022), is the most populous in the province of Río Negro, Bariloche is the most visited destination in Patagonia and one of the most visited destinations in Argentina. It receives around two million tourists annually, mainly in the winter season, among which those from Europe and America stand out due to their influx. It is known for being the main travel destination for high school graduates in Argentina and Uruguay. Its natural reserves, which include lakes, forests and mountains, and its outstanding ski resorts are the main attraction. The city has been considered by some sources as the second ski destination worldwide and the largest in South America.',
    date: '23-05-2023 at 28-05-2023',
    price: '850 $',
    },

    {
    id: 1,
    name: 'Cataratas del Iguazu',
    country: 'Argentina',
    location: 'Misiones',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ab/80/ba/garganta-del-diablo.jpg?w=1100&h=-1&s=1',
    description: 'Cataratas or Iguazú, are a set of waterfalls that are located on the Iguazú River, on the border between the Argentine province of Misiones and the Brazilian state of Paraná. They are totally inserted in protected areas; The sector of Argentina is located within the Iguazú National Park, while that of Brazil is located in the Iguazú National Park (Parque Nacional do Iguaçu), in the State of Paraná. They are close to the border between Paraguay and Argentina, only 13.8 km in a straight line. They were chosen as one of the Seven Natural Wonders of the World. They are made up of 275 jumps; 80% of them are located on the Argentine side. A separate spectacle is its highest flow waterfall and, at 80 m, also the highest, the Garganta del Diablo, which can be enjoyed in all its majesty from just 50 m, walking along the walkways that start from Puerto Canoas, which It is reached using the ecological train service.',
    date: '10-07-2023 at 13-07-2023',
    price: '500 $',
},

    {
    id: 2,
    name: 'Mar del Plata',
    country: 'Argentina',
    location: 'Mar del Plata',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/8b/8d/bd/imperdible-lugar.jpg?w=1400&h=-1&s=1',
    description: 'Mar del Plata is a city located in the southeast of the province of Buenos Aires, Argentina, on the coast of the Argentine sea. It is the head of the General Pueyrredón district, an important port and seaside resort and the second tourist destination in the country after Buenos Aires. It was founded with its current name on February 10, 1874 by Patricio Peralta Ramos.',
    date: '14-07-2023 at 18-07-2023',
    price: '600 $',
},

    {
    id: 3,
    name: 'Cerro 7 Colores',
    country: 'Argentina',
    location: 'Salta/Jujuy',
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/51/c1/a4.jpg',
    description: 'The Massif of the Seven Colors is a hill located on the outskirts of the city of Purmamarca on National Route 52 that goes to the Paso de Jama (Argentina-Chile border), 4 kilometers from National Route 9 in the province of Jujuy (Argentina). The town of Purmamarca is at its feet and both form one of the most recognized postcards of the Argentine northwest. It was originated around seventy-five million years ago. It is made up of marine, lake and fluvial sediments that were deposited in the area for centuries. Pink color: composed of red clay, mudstones (mud) and arilitas (sand). Estimated age: 3 to 4 million years. Whitish color: limestone or calcareous stone, white qualities. Age: 400 million years. Brown, brown and purple colors: Composed of lead and sandy loams, rich in calcium carbonate. Age: 80 to 90 million years. Red color: composed of claystones (iron) and clays belonging to the Upper Tertiary. Age: 3 to 4 million years. Green color: composed of phyllites, copper oxide slates. Age: 600 million years. Earthy brown color: fanglomerate composed of rock with manganese belonging to the Quaternary. Age: 1 to 2 million years. Mustard yellow color: calcareous sandstones with sulfur. Age: 80 to 90 million years. It was declared a UNESCO World Heritage Site in 2003 due to its enormous cultural value.',
    date: '27-07-2023 at 30-07-2023',
    price: '450 $',
    },

    {
    id: 4,
    name: 'El Partenon',
    country: 'Grecia',
    location: 'Acropolis de Atenas',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d5/f7/dd/acropolis-and-acropolis.jpg?w=1100&h=-1&s=1',
    description: 'The Parthenon meaning: maiden, virgin, celibate is a temple consecrated to the protector of Athens, Athena Parthenos, and one of the main octostyle Doric temples, something rare, made of white Pentelic marble and covered with Parian marble tiles, which are preserved. It was built between the years 447 a. C. and 438 a. C. in the Acropolis of Athens. It is the best known Greek temple in the world and a symbol of high classical Greek art.',
    date: '01-08-2023 at 10-08-2023',
    price: '3000 $',
    },

    {
    id: 5,
    name: 'La Gran Muralla China',
    country: 'China',
    location: 'Norte de China',
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/e7/08/cc.jpg',
    description: 'The Great Wall of China is an ancient Chinese fortification, built and rebuilt between the 5th century B.C. C. and the 16th century to protect the northern border of the Chinese Empire during successive imperial dynasties from attacks by Xiongnu nomads from Mongolia and Manchuria. Counting its ramifications and secondary constructions, it is estimated to be about 21,200 km in length, from the border with Korea, to the edge of the Yalu River, to the Gobi desert, along an arc that roughly outlines the southern edge of Inner Mongolia, although only 30% of it is preserved today. On average, it is 6 to 7 m tall and 4 to 5 m wide. The wall was designated a World Heritage Site by UNESCO in 1987.',
    date: '12-07-2023 at 16-07-2023',
    price: '2000 $',
    },

    {
    id: 6,
    name: 'Machu Pichu',
    country: 'Peru',
    location: 'Cusco',
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/71/ef/75.jpg',
    description: 'Machu Picchu (in Quechua, old mountain) is the contemporary name given to a llacta —an ancient Andean Inca town— built before the fifteenth century, located in the Eastern Cordillera of southern Peru, in the Andes mountain range. at 2430 meters above sea level. It is located in the department of Cusco (province of Urubamba, district of Machupicchu) on the Sacred Valley of the Incas, 80 kilometers northwest of the city of Cusco, city of Peru and by where the Urubamba River flows, a river that crosses the mountain range and originates a canyon with a tropical mountain climate. It was declared a Peruvian Historical Sanctuary in 1981 and has been on the Unesco World Heritage List since 1983. On July 7, 2007, Machu Picchu was declared one of the new seven wonders of the modern world.',
    date: '12-08-2023 at 16-08-2023',
    price: '1700 $',
    },

    {
    id: 7,
    name: 'Taj Mahal',
    country: 'India',
    location: 'Uttar Pradesh',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/9a/30/d6/agra.jpg?w=2000&h=-1&s=1',
    description: 'The Taj Mahal is a funerary monument built between 1632 and 1654 in the city of Agra, it is considered the most beautiful example of a palace, a style that combines elements of Islamic, Persian, Indian and even Turkish architecture. This monument has achieved special notoriety for the romantic nature of its inspiration. Although the mausoleum covered by the white marble dome is the best known part, the Taj Mahal is a walled complex of buildings that occupies 17 hectares and also includes a great mosque, a house of guests and gardens. The monument is a major tourist destination in India. In 1983, it was recognized by UNESCO as a World Heritage Site for being the jewel of Muslim art in India and one of the universally admired world heritage masterpieces.',
    date: '05-08-2023 at 15-08-2023',
    price: '5000 $',
    },

    {
    id: 8,
    name: 'Torre Eiffel',
    country: 'Francia',
    location: 'Paris',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/15/a3/a1/c-emeric-livinec-sete.jpg?w=1400&h=-1&s=1',
    description: 'The Eiffel Tower (Tour Eiffel, in French), initially called Tour de 300 mètres (300-meter Tower) is a puddled iron structure, Located at the end of the Champ de Mars on the banks of the Seine River, this Parisian monument, symbol of France and its capital, it is the tallest structure in the city and the most visited tourist monument in the world, with 7.1 million tourists each year. With a height of 300 meters, later extended with an antenna to the At 324 meters, the Eiffel Tower was the tallest structure in the world for 41 years. It is the most visited paying monument in the world.',
    date: '12-09-2023 at 18-09-2023',
    price: '3700 $',
    },

    {
    id: 9,
    name: 'Cristo Redentor',
    country: 'Brasil',
    location: 'Rio de Janeiro',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/e4/12/c9/visao-privilegiada.jpg?w=600&h=-1&s=1',
    description: 'The Christ the Redeemer or Cristo del Corcovado is an Art Deco statue representing Jesus of Nazareth, with open arms, showing the city of Rio de Janeiro, Brazil.The statue is thirty meters high on an eight meter pedestal. This monument was inaugurated on October 12, 1931 after approximately 5 years of construction. It is the fourth largest statue of Jesus of Nazareth in the world, behind the 36 m statue of Cristo Rey in Świebodzin (Poland), the 34.2 m Cristo de la Concordia in Cochabamba (Bolivia), and the Christ the Redeemer in Tihuatlan (Mexico), 31.5 m. It is recognized, by a private company, as one of the new seven wonders of the modern world along with Machu Picchu, the Great Wall of China, the Colosseum in Rome, the Taj Mahal, Chichén Itzá and Petra.',
    date: '05-09-2023 at 10-09-2023',
    price: '2000 $',
    },

    {
    id: 10,
    name: 'Estatua de la Libertad',
    country: 'Estados Unidos',
    location: 'New York',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/17/54/e6/caption.jpg?w=1400&h=-1&s=1',
    description: 'The Statue of Liberty is one of the most famous monuments in New York, the United States and the world. It is located on Liberty Island south of Manhattan Island, next to the mouth of the Hudson River and near Ellis Island. The Statue of Liberty was a gift from the French people to the American people in 1886 to commemorate the centennial of the United States Declaration of Independence and as a sign of friendship between the two nations. It was inaugurated on October 28, 1886.',
    date: '12-12-2023 at 20-12-2023',
    price: '3400 $',
    },

    {
    id: 11,
    name: 'Colonia Tovar',
    country: 'Venezuela',
    location: 'Aragua',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/6a/5a/62/hotel-selva-negra.jpg?w=900&h=-1&s=1',
    description: 'Colonia Tovar is a Venezuelan city, capital of the Tovar municipality, in the Aragua state. It is located 65.5 km west of Caracas, the capital of Venezuela, and at an altitude of almost 2,000 meters above sea level. It was founded on April 8, 1843 by a group of German immigrants from the then Grand Duchy of Baden (later incorporated into Germany). It is characterized by maintaining the cultural imprint of its origin, which is why it is called the Germany of the Caribbean or The German People of Venezuela.',
    date: '12-07-2023 at 18-07-2023',
    price: '2000 $',
    },

    {
    id: 12,
    name: 'Los Roques',
    country: 'Venezuela',
    location: 'Dependencias Federales',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/a8/82/07/esta-es-la-super-vision.jpg?w=700&h=-1&s=1',
    description: 'The Los Roques Archipelago is a Federal dependency that groups together a group of islands and cays in the Lesser Antilles belonging to Venezuela that have an estimated surface area of 40.61 km² and are located between the Las Aves archipelago (to the west) and the island of La Orchila (to the east) 176 km north of the city of Caracas. It is a national park and according to estimates in 2014 it had 3,100 fixed inhabitants (being the most populous federal agency). It has an approximate area of 221,120 hectares between maritime and terrestrial spaces, and is considered the second largest marine park in Latin America.',
    date: '18-10-2023 at 30-10-2023',
    price: '3800 $',
    },

    {
    id: 13,
    name: 'Roraima',
    country: 'Venezuela',
    location: 'Bolivar',
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/12/30/57/a-vast-green.jpg?w=800&h=-1&s=1",
    description: 'Mount Roraima, also known as Roraima tepuy, Roraima hill or simply Roraima, with 2810 m s. no. m., is the highest point of the chain of plateaus tepuis (table mountains) of the Sierra de Pacaraima, in Venezuela. First described by English pirate Walter Raleigh in 1596, its 31 km² summit area is divided between Venezuela (95%) and Brazil (5%), with 400-meter-high cliffs on all sides. In the Tepuy is the highest point of the Brazilian state of Roraima. The highest point of the mountain is called El Maverick, at 2810 m, located in the extreme south of the plateau, within Venezuela.',
    date: '12-12-2023 at 20-12-2023',
    price: '4500 $',
    },

    {
    id: 14,
    name: 'Salto Angel',
    country: 'Venezuela',
    location: 'Bolivar',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/a7/ed/f3/angel-falls.jpg?w=1100&h=-1&s=1',
    description: 'Angel Falls is the highest waterfall in the world, with a height of 979 m (807 m of uninterrupted fall), originating in the Auyantepuy. It is located in the Canaima National Park, Bolívar State, Venezuela. It is a protected natural area, having been declared a national park on June 12, 1962 and a World Heritage Site by Unesco in 1994, which extends over an area of more than 30,000 km² (similar to the territorial extension of Belgium), to the border with Brazil and the Essequibo territory.',
    date: '22-11-2023 at 30-11-2023',
    price: '3700 $',
    },

]

const Input = () => {
    const [data, setData] = useState ([]);
    const [filtered, setFiltered] = useState (LinksCities);


const valor = useSelector((store) => store.cities)
    console.log(valor);

//const dispatch = useDispatch()


var myRequest = new Request (LinksCities);

//array vacio
    useEffect(() => {
        fetch(LinksCities)
        .then((response) => response.json())
        .then((info) => {
        setData(info.LinksCities)
        setFiltered(info.LinksCities)

        dispatch(citiesAction.allCities(info.LinksCities))
    });
    }, []);

    useEffect(() => {
        handleInput()
    },[filtered]);

const handleInput = () => {
    const input= document.getElementById("search").value;
    const filtered = LinksCities.filter ( landscapes => landscapes.name.toLowerCase().includes(input.toLowerCase()))
    setFiltered(filtered)
};

*/

  return (
    <main>
        <h3>DESTINATIONS</h3>
        <input type="text" id="search" placeholder='find your next destination' onChange={handleInput} />
        <section className= 'flex flex-wrap flex-row'>
        {
            filtered.map (
                (each, id)=><Cards key={id} name={each.name} country={each.country} location={each.location} image={each.image} description={each.description} price={each.price} date={each.date}/>
            )
        }

        </section>
    </main>
  )
}

export default Input;