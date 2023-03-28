import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Shop.css'

const Shop = () => {

    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    } ,[]);


    useEffect( () =>{
        const storedCartFromStorage = getShoppingCart();
        // console.log(storedCartFromStorage);
        for(const id in storedCartFromStorage){
            const addedPlayer = players.find(player => player.id == id);
            // console.log(addedPlayer);
        }

    } ,[players])




    const addToCart = (player) =>{
        const newCart = [...cart, player];
        setCart(newCart);

        addToDb(player.id);

    }



    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                    players.map(player => <Player
                    player = {player}
                    key = {player.id}
                    addToCart = {addToCart}
                    

                    ></Player>)

                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;