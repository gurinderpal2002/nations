import React from 'react';
import { Link } from "react-scroll";
import {ReactComponent as Arrow} from './img/SVG/arrow2.svg';

import BackgroundVideo from './BackgroundVideo';


const Header = () => {

    return (
        <header className="header">
            <BackgroundVideo />
            <div className="header__content">
                
                    <div className="header__text-box">
                        <h1 className="heading-primary u-margin-bottom-small">
                            <span className="heading-primary--main">Nations</span>
                            <span className="heading-primary--sub">All Across the globe</span>
                        </h1>

                    <div className="button__container">
                        
                        <Link
                            className="btn btn--main btn--animated"
                            to="continent"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1500}
                        >    
                        Know about your country

                        </Link>

                    </div>   

                </div>

            </div>

            <Link
                    className="header__arrow"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1500}
                >  

                <Arrow height="50" width="50" fill="#461264"/>

            </Link>

        </header>
    );

}


export default Header;