import React, { useState } from 'react';
import axios from 'axios';

const BuySell = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleBuy = async () => {
    try {
      await axios.post('/api/buy', { walletAddress, amount });
      alert('Bought successfully!');
    } catch (error) {
      console.error('Error buying:', error);
    }
  };

  const handleSell = async () => {
    try {
      await axios.post('/api/sell', { walletAddress, amount });
      alert('Sold successfully!');
    } catch (error) {
      console.error('Error selling:', error);
    }
  };

  return (
    <div>
      <h2>Buy/Sell</h2>
      <input
        type="text"
        placeholder="Wallet Address"
        value={walletAddress}
        onChange={e => setWalletAddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={handleBuy}>Buy</button>
      <button onClick={handleSell}>Sell</button>
    </div>
  );
};

export default BuySell;
