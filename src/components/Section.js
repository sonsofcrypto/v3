import React from 'react';
import './Section.css';

const Section = (props) => {
    const {title, quotes, imgName, qoutesPalleteIds} = props;
    return (
        <div className='section content-wrapper content-wrapper-padding'>
            <ul className='quotes'>
                {quotes.map((quote, i) => (
                    <li key={i}>
                        <h2 className={'color-palette-' + qoutesPalleteIds[i]}>{quote}</h2>
                    </li>
                ))}
            </ul>
            <h1>{title}</h1>
            <div
                className='section-body'
                dangerouslySetInnerHTML={{ __html: props.children }}>
            </div>
            <img className='section-image'
                 srcSet={
                     'images2/' + imgName + '.png 1x, ' +
                     'images2/' + imgName + '@2x.png 2x'
                 }
                 src={'images2/' + imgName + '.png'}
            />
        </div>
    )
}

export default Section;
