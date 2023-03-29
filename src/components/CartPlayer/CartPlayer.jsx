import React from 'react';
import './CartPlayer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const CartPlayer = (props) => {

    const { name, img, id } = props.player;
    const removeFromCart = props.removeFromCart;

    return (
        <div className='addedPlayer'>
            <div><img className='added-img' src={img} alt="" /></div>
            <div><h5>{name} </h5></div>
            <div>
                <FontAwesomeIcon onClick={() => removeFromCart(id)} className='delete' icon={faTrash} />
                </div>
        </div>
    );
};

export default CartPlayer;