import React from 'react';
import Wallets from './components/Wallets';
import BuySell from './components/BuySell';

const App = () => {
  return (
    <div>
      <h1>Trading Bot</h1>
      <Wallets />
      <BuySell />
    </div>
  );
};

export default App;
