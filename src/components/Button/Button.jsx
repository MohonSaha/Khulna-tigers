import React from 'react';
import './Button.css'

const Button = (props) => {
    const {children} = props;
    return (
        <div>
            <button className='btn-seeMore'>{children}</button>
        </div>
    );
};

export default Button;