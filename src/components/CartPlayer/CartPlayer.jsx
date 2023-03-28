import React from 'react';
import './CartPlayer.css'

const CartPlayer = (props) => {

    const {name} = props;

    return (
        <div>
            <p className='addedPlayer'>{name}</p>
        </div>
    );
};

export default CartPlayer;