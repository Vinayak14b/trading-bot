const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/trading-bot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const walletRoutes = require('./routes/wallets');
app.use('/api/wallets', walletRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

const { identifyHeroTokenWallets, trackTransactions, executeOrders } = require('./bot');

setInterval(async () => {
  await identifyHeroTokenWallets();
  await trackTransactions();
  await executeOrders();
}, 60000);
