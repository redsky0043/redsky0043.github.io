import React from 'react';
import { GridItem } from './GridItem.jsx';

export const Grid = ({ images = [] }) => {
    return (
        <div className='grid' >
            {images.map((image) => {
                <GridItem images='image' />
            })}
        </div>
    )
}