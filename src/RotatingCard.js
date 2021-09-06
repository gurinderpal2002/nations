import React from 'react';

const RotatingCard = (props) => {



    const showPopUp = (e) => {
        props.onButtonClick(e);
    }



        const url = `https://flagcdn.com/${(props.country.code).toLowerCase()}.svg`;

        return (
            
            <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture">
                            <img src={url} alt={props.country.name} />
                            
                         </div>

                        <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--1">{props.country.name}</span>
                        </h4>

                        <div className="card__details">
                            <ul>
                                <li><b>Native Name:</b> {props.country.native} </li>
                                <li><b>Capital:</b> { props.country.capital}</li>
                                <li><b>Currency:</b> {props.country.currency}</li>
                                <li><b>Language:</b> {props.country.languages[0].name} </li>
                            </ul>


                        </div>

                    </div>

                    <div className="card__side card__side--back" style={{backgroundImage: `url("${url}")`}}>
                           <div className="card-back--content">
                               <button id={props.country.name} className="btn btn--main btn--main--back" onClick={e => showPopUp(e)} >Know More</button>
                           </div>
                    </div>

                   
                     
            </div>
        );
}




export default RotatingCard;