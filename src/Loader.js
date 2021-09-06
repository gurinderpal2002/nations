import React from 'react';


const Loader = (props) => {


        return (
            <div className={`div-1 div-1--${props.size}`}>
                    <div className="rotate"></div>
                    <h5 className="heading-tertiary">
                    Loading
                    </h5>
            </div>
        );

}


export default Loader;