import React from 'react';

const ContinentButton = (props) => {

        return (
            <div className="buttons">
                    <button id="AS" className="buttons--continent" onClick={(e) =>  props.onSelectContinent(e.target.id) }>Asia</button>
                    <button id="EU" className="buttons--continent" onClick={(e) =>  props.onSelectContinent(e.target.id) }>Europe</button>
                    <button id="NA" className="buttons--continent" onClick={(e) =>  props.onSelectContinent(e.target.id) }>North America</button>
                    <button id="SA" className="buttons--continent" onClick={(e) =>  props.onSelectContinent(e.target.id) }>South America</button>
                    <button id="AF" className="buttons--continent" onClick={(e) =>  props.onSelectContinent(e.target.id) }>Africa</button>
                    <button id="OC" className="buttons--continent" onClick={(e) =>  props.onSelectContinent(e.target.id) }>Oceania</button>
            </div>
        );
}


export default ContinentButton;