import React from 'react';

const Recipe2 = ({ingredient}) => {
    return (
        <div>
            <ul className='ps-8 py-1 list-disc'>
                <li>{ingredient}</li>
            </ul>
        </div>
    );
};

export default Recipe2;