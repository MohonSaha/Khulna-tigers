import React from 'react';
import CartPlayer from '../CartPlayer/CartPlayer';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteShoppingCart } from '../../utilities/fakedb';

const Cart = (props) => {

    const { cart } = props;


    let totalPrice = 0;
    let playerDetails = [];
    for (const player of cart) {
        totalPrice = totalPrice + player.price;
        playerDetails.push(player);
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + tax;




    return (
        <div>
            <h2 className='order-title'>Order summary</h2>
            <div className='order-details'>
                <p>Selected number: {cart.length} </p>
                <p>Toral Price: ${totalPrice}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</p>

                {
                    playerDetails.map(player => <CartPlayer
                        player={player}
                        removeFromCart={props.removeFromCart}
                    ></CartPlayer>)
                }

                <button onClick={props.clearAllCart} className='cart-clear'>Clear Cart
                <FontAwesomeIcon className='clear-icon' icon={faTrash} /></button>
            </div>
        </div>
    );
};

export default Cart;