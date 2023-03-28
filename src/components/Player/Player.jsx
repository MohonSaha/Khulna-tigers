import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {

    const addToCart = props.addToCart;
    const {name, id, img, price, ratings} = props.player;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h2 className='product-name' >{name}</h2>
                <p>Price: ${price}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => addToCart(props.player)} className='add-cart'>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Player;