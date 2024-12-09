import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <h1>CatShop</h1>
            </div>
            <nav className="menu">
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#care">Cuidados</a></li>
                    <li><a href="#funfacts">Datos Curiosos</a></li>
                    <li><a href="#stories">Historias</a></li>
                    <li><a href="#legends">Leyendas</a></li>
                    <li><a href="#recommendations">Recomendaciones</a></li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    );
};

export default NavBar;
