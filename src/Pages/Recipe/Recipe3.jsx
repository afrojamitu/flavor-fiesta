import React from 'react';

const Recipe3 = ({ingredient}) => {
    return (
        <div>
            <ul className='ps-8 py-1 list-disc'>
                <li>{ingredient}</li>
            </ul>
        </div>
    );
};

export default Recipe3;