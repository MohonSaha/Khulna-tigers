import React from 'react';
import './CartPlayer.css'

const CartPlayer = (props) => {

    const {name, img} = props.player;

    return (
        <div>
            <p className='addedPlayer'>{name}
            <img className='added-img' src={img} alt="" /></p>
        </div>
    );
};

export default CartPlayer;