import axios from "axios";
import { Currency } from "../models/currency.model.js";

const options = {
  method: "GET",
  url: "https://api.coingecko.com/api/v3/simple/price",
  params: {
    ids: "bitcoin,ethereum,matic-network",
    vs_currencies: "usd",
    include_market_cap: true,
    include_24hr_change: true,
    include_last_updated_at: true,
  },
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": process.env.API_SECRET_KEY,
  },
};

const fetchCryptoData = async () => {
  try {
    const response = await axios.request(options);
    const data = response.data;

    const coins = [
      {
        currency: "Bitcoin",
        price_usd: data.bitcoin.usd,
        market_cap: data.bitcoin.usd_market_cap,
        change_24h: data.bitcoin.usd_24h_change,
      },
      {
        currency: "Ethereum",
        price_usd: data.ethereum.usd,
        market_cap: data.ethereum.usd_market_cap,
        change_24h: data.ethereum.usd_24h_change,
      },
      {
        currency: "Matic",
        price_usd: data["matic-network"].usd,
        market_cap: data["matic-network"].usd_market_cap,
        change_24h: data["matic-network"].usd_24h_change,
      },
    ];

    for (const coin of coins) {
      const newRecord = new Currency(coin);
      await newRecord.save();
    }
    console.log("Cryptocurrency data saved successfully.");
  } catch (error) {
    console.error("Error fetching cryptocurrency data:", error);
  }
};

export { fetchCryptoData };