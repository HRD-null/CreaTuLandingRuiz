import React from 'react';

const ItemListContainer = ({ message }) => {
    return (
        <main className="item-list-container">
            <h2>{message}</h2>
            <p>Pronto podrás explorar nuestro catálogo de productos exclusivos para gatos.</p>
        </main>
    );
};

export default ItemListContainer;
