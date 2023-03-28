import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Shop.css'

const Shop = () => {

    const [players, setPlayers] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    } ,[])

    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                    players.map(player => <Player
                    player = {player}
                    key = {player.id}

                    ></Player>)

                }
            </div>
            <div className="cart-container">

            </div>

        </div>
    );
};

export default Shop;