// backend/scripts/populateTestData.js
const mongoose = require('mongoose');
const Wallet = require('../models/Wallet');

mongoose.connect('mongodb://localhost:27017/trading-bot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const populateTestData = async () => {
  const testWallets = [
    {
      address: 'wallet1',
      transactions: [
        { type: 'buy', amount: 5, timestamp: new Date() },
        { type: 'sell', amount: 5, timestamp: new Date() },
      ],
    },
    {
      address: 'wallet2',
      transactions: [
        { type: 'buy', amount: 10, timestamp: new Date() },
      ],
    },
  ];

  await Wallet.insertMany(testWallets);
  console.log('Test data inserted');
  mongoose.connection.close();
};

populateTestData();
