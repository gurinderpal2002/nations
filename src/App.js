import React, {useState} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Header from './Header';
import IntroGallery from './IntroGallery';
import IntroText from './IntroText';
import Slider from './Slider';
import SectionContinents from './SectionContinents';
import Cards from './Cards';
import MultipleImages from './MultipleImages';
import Footer from './Footer';
import PopUp from './PopUp';

const client = new ApolloClient(
{
    uri: 'https://countries.trevorblades.com/'
    
});


const App = () => {

    
    const [popUpStatus,setPopUpStatus] = useState(false);
    const [activeCountry, setActiveCountry] = useState('');
    const [activeContinent, setActiveContinent] = useState('');

    const onSelectContinent = (continent) => {
        setActiveContinent(continent);
    }

    const displayCards = () => {
        if(activeContinent === '')
            return null;
        else
        {
            return (
                    <Cards key={activeContinent} continent={activeContinent} onButtonClick={onKnowMore} />
                    
                );
        }
            
    }


    const onKnowMore = (country) => {
        setPopUpStatus(true);
        setActiveCountry(country.target.id);
    }

    const onClosePopUp = () => {
        setPopUpStatus(false);
    }

    const displayPopUp = () => {

        if(popUpStatus)
            return <PopUp country={activeCountry} onCloseButton={onClosePopUp} />;
        
        else
            return null;

    }



        return(
            <ApolloProvider client={client}>
                <div className="container">
                <Header />
                    <IntroGallery />
                    <IntroText />
                    <Slider />
                    <SectionContinents onSelectContinent={onSelectContinent}/>
                    {displayCards()}
                    {displayPopUp()}
                    <MultipleImages />
                    <Footer />
                
                </div>
            </ApolloProvider>
           
        );


}

export default App;