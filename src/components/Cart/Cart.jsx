import React from 'react';
import CartPlayer from '../CartPlayer/CartPlayer';
import './Cart.css'

const Cart = (props) => {

    const {cart} = props;


    let totalPrice = 0;
    let playerName = [];
    for(const player of cart){
        totalPrice = totalPrice + player.price;
        playerName.push(player.name);
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
                    playerName.map(name => <CartPlayer
                    name={name}
                    ></CartPlayer>)
                }
            </div>
        </div>
    );
};

export default Cart;