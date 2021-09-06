import React from 'react';
import {ReactComponent as Logo} from './img/SVG/earth.svg';

const Footer = () => {


    return (
        <section className="footer">
                <div className="logo">
                    <Logo height="50" width="200" fill="royalblue"/>
                </div>
               
                <h1 className=" footer__content-name ">
                    Nations
                </h1>
        </section>
    )

}




export default Footer;