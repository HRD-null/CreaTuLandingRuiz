import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer message="¡Bienvenidos al mundo de productos para gatos!" />
        </div>
    );
};

export default App;
