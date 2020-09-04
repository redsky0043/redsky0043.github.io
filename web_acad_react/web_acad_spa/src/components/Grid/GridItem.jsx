import React from 'react';

export const GridItem = ({ image }) => {
    return (
        <div className='grid-item' >
            <img src={image.urls.small} alt=""/>
        </div>
    )
}