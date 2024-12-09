import React from 'react';

const ItemListContainer = ({ message }) => {
    // Lista de categorías
    const categories = ['Aseo', 'Alimento', 'Juguetes', 'Productos Personalizados'];

    return (
        <main className="item-list-container">
            <h2>{message}</h2>
            <p>Pronto podrás explorar nuestro catálogo de productos exclusivos para gatos.</p>
            <div className="categories">
                <h3>Categorías de Productos</h3>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index}>{category}</li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default ItemListContainer;