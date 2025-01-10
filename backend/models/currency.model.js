import mongoose from "mongoose";

const currencySchema = new mongoose.Schema({
  currency: {
    type: String,
    required: true,
  },
  price_usd: {
    type: Number,
    required: true,
  },
  market_cap: {
    type: Number,
    required: true,
  },
  change_24h: {
    type: Number,
    required: true,
  },
},{timestamps: true});

export const Currency = mongoose.model("Currency", currencySchema);
