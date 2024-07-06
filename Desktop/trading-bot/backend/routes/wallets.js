const express = require('express');
const Wallet = require('../models/Wallet');
const router = express.Router();

// Add new wallet
router.post('/add', async (req, res) => {
  const { address } = req.body;
  const newWallet = new Wallet({ address });
  await newWallet.save();
  res.send('Wallet added');
});

// Get all wallets
router.get('/', async (req, res) => {
  const wallets = await Wallet.find();
  res.json(wallets);
});

module.exports = router;
