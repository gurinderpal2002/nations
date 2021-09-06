import React from 'react';
import ContinentButton from './ContinentButton';

const SectionContinents = (props) => {

        return (

                <div className="continent" id="continent">
                    <h2 className="heading-secondary u-margin-bottom-medium">
                        Select one of the continents
                    </h2>
                    
                <ContinentButton  onSelectContinent={props.onSelectContinent}/>

                </div>

        );

}


export default SectionContinents;