import React from 'react';
import {gql} from 'apollo-boost';
import { useQuery } from 'react-apollo';
import Loader from './Loader';
import RotatingCard from './RotatingCard';

const continentQuery= gql`
query getCountries($code: ID!){
    continent(code: $code){
        countries{
            name
            native
            capital
            currency
            code
            languages{
                name
                native
            }
        }
    }
}`;


const Cards = (props) => {

    // const [countriesList, setCountriesList] = useState([]);
   

    const { data, loading} = useQuery(continentQuery,{
    variables: { code: `${props.continent}`}});


    const displayCards = () => {
        console.log(data);
        return data.continent.countries.map(country => {


            return (
                     <RotatingCard key={country.name}  country={country} onButtonClick={props.onButtonClick} />
               
                    ); 
        });

    }

    if (loading) 
        return <Loader size="large"/>;

    return ( 
            <div className="cards">
                {displayCards()}
            
            </div>

    )

}

export default Cards;