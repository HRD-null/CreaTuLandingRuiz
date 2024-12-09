import React from 'react';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src="./img/cart-icon.png" alt="Carrito de Compras" className="cart-icon" />
            <span className="cart-count">0</span>
        </div>
    );
};

export default CartWidget;
