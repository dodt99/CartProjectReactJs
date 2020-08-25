import React from 'react';
import './App.css';

import Menu from './components/Menu';
import { CartProvider } from './contexts/CartProvider';

function App() {
  return (
    <CartProvider>
    <div className="App">
      <Menu />
    </div>
    </CartProvider>
  );
}

export default App;
