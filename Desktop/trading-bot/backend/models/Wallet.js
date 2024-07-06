const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  address: { type: String, required: true, unique: true },
  transactions: [
    {
      type: { type: String, required: true },
      amount: { type: Number, required: true },
      timestamp: { type: Date, required: true },
    },
  ],
  lastChecked: { type: Date, default: Date.now },
});

const Wallet = mongoose.model('Wallet', walletSchema);
module.exports = Wallet;
