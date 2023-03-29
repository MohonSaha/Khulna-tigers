import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { addToDb, deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Button from '../Button/Button';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Shop.css'

const Shop = () => {

    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    const [remove, setRemove] = useState(true);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);


    useEffect(() => {
        const storedCartFromStorage = getShoppingCart();
        let savedCart = [];
        for (const id in storedCartFromStorage) {
            const addedPlayer = players.find(player => player.id == id);
            if (addedPlayer) {
                const quantity = storedCartFromStorage[id];
                addedPlayer.quantity = quantity;
                savedCart.push(addedPlayer);
            }
        }
        setCart(savedCart);

    }, [players, remove])



    // This function added player in the cart:
    const addToCart = (player) => {
        const newCart = [...cart, player];
        console.log(newCart.length);
        if (newCart.length === 5) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have already added 4 players',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            return newCart;
        }

        const storedCartFromStorage = getShoppingCart();
        for (const id in storedCartFromStorage) {
            if (player.id === id) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'already added! Add another one.',
                    footer: '<a href="">Why do I have this issue?</a>'
                })

                console.log('added');
                return newCart;
            }
        }
        console.log(newCart);
        setCart(newCart);
        addToDb(player.id);

    }

    //This function will clear the local storage;
    const clearAllCart = () => {
        deleteShoppingCart();
        setCart([]);
    }

    // This function will remove clicked item in the storage:
    const removeFromCart = (id) => {
        removeFromDb(id);
        setRemove(!remove);
    }

    // This function will work to show all products :
    const handelShowAll = () =>{
        setShowAll(true);
    }



    return (

        <>
            <div className='shop-container'>

                <div className='product-parent'>
                    <h2 className='pandavs'>Make your team with four players</h2>
                    <div className="products-container">
                        {
                            players.slice(0, showAll? 12 : 6).map(player => <Player
                                player={player}
                                key={player.id}
                                addToCart={addToCart}
                            ></Player>)

                        }
                    </div>
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        clearAllCart={clearAllCart}
                        removeFromCart={removeFromCart}
                    ></Cart>
                </div>

            </div>

            {
                !showAll && <span onClick={handelShowAll} style={{textAlign: 'center', marginBottom: '200px'}}>
                <Button>See More</Button>
            </span>
            }
        </>
    );
};

export default Shop;