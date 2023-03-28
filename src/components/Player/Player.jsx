import React from 'react';
import './Player.css'

const Player = (props) => {

    const {name, id, img, price, ratings} = props.player;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h2 className='product-name' >{name}</h2>
                <p>Price: ${price}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button className='add-cart'>
                Add to Cart 
                </button>
        </div>
    );
};

export default Player;