import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Wallets = () => {
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const response = await axios.get('/api/wallets');
        setWallets(response.data);
      } catch (error) {
        console.error('Error fetching wallets:', error);
      }
    };

    fetchWallets();
  }, []);

  return (
    <div>
      <h2>Wallets</h2>
      <ul>
        {wallets.map(wallet => (
          <li key={wallet._id}>{wallet.address}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wallets;
