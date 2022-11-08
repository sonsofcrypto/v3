import React from 'react';
import Vitalik from "./Vitalik";
import './Hero.css';

const Hero = (props) => {
    const { progress } = props;
    return (
        <div className='hero-container'>
            <div className='hero-img-lines'>
                <div className='hero-img-stars'></div>
                <div className='hero-img-mountains'></div>
                <div className='hero content-wrapper content-wrapper-padding'>
                    <img className='hero-meme-wojak-bliss'
                         srcSet={
                             'images2/meme-wojak-bliss.png 1x, ' +
                             'images2/meme-wojak-bliss@2x.png 2x'
                         }
                         src={'images2/meme-wojak-bliss.png'}
                    />
                    <img className='hero-meme-pepe'
                         srcSet={
                             'images2/meme-pepe.png 1x, ' +
                             'images2/meme-pepe@2x.png 2x'
                         }
                         src={'images2/meme-pepe.png'}
                    />
                    <img className='hero-img-palms hero-img-palms-left'
                         srcSet={
                             'images2/hero-palms-left.png 1x, ' +
                             'images2/hero-palms-left@2x.png 2x'
                         }
                         src={'images2/hero-palms-left.png'}
                    />
                    <img className='hero-img-palms hero-img-palms-right'
                         srcSet={
                             'images2/hero-palms-right.png 1x, ' +
                             'images2/hero-palms-right@2x.png 2x'
                         }
                         src={'images2/hero-palms-right.png'}
                    />
                    <img className='hero-img-logo'
                         srcSet={
                             'images2/hero-logo.png 1x, ' +
                             'images2/hero-logo@2x.png 2x'
                         }
                         src={'images2/hero-logo.png'}
                    />
                    <div className='hero-meme'><Vitalik/></div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
