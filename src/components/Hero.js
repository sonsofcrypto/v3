import React from 'react';
import './Hero.css';

const Hero = (props) => {
    const { progress } = props;
    return (
        <div className='hero content-wrapper content-wrapper-padding'>
            <center>
            <img className='hero-img-lines'
                 srcSet={
                     'images2/hero-lines.png 1x, ' +
                     'images2/hero-lines@2x.png 2x'
                 }
                 src={'images2/hero-lines.png'}
            />
            </center>
        </div>
    )
}

export default Hero;
