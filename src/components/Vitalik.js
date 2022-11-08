import React from 'react';
import './Vitalik.css';

const Vitalik = (props) => {
    const { progress } = props;
    return (
        <div className='vitalik-container'>
            <img className='vitalik-img'
                 srcSet={
                     'images2/meme-vitalik.png 1x, ' +
                     'images2/meme-vitalik@2x.png 2x'
                 }
                 src={'images2/meme-vitalik.png'}
            />
            <img className='italik-img'
                 srcSet={
                     'images2/meme-italik.png 1x, ' +
                     'images2/meme-italik@2x.png 2x'
                 }
                 src={'images2/meme-italik.png'}
            />
        </div>
    )
}

export default Vitalik;
