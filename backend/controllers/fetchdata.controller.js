import axios from "axios";
import { Currency } from "../models/currency.model";
const fetchCryptoData = async () => {
  try {
    const url = "";
    const params = {
      ids: "bitcoin,ethereum,matic-network",
      vs_currencies: "usd",
      include_market_cap: true,
      include_24hr_change: true,
    };

    const response = await axios.get(url, { params });
    const data = response.data;

    const coins = [
      {
        coin_name: "Bitcoin",
        price_usd: data.bitcoin.usd,
        market_cap_usd: data.bitcoin.usd_market_cap,
        change_24h: data.bitcoin.usd_24h_change,
      },
      {
        coin_name: "Ethereum",
        price_usd: data.ethereum.usd,
        market_cap_usd: data.ethereum.usd_market_cap,
        change_24h: data.ethereum.usd_24h_change,
      },
      {
        coin_name: "Matic",
        price_usd: data["matic-network"].usd,
        market_cap_usd: data["matic-network"].usd_market_cap,
        change_24h: data["matic-network"].usd_24h_change,
      },
    ];

    for (const coin of coins) {
      const newRecord = new Crypto(coin);
      await newRecord.save();
    }

    console.log("Cryptocurrency data saved successfully.");
  } catch (error) {
    console.error("Error fetching cryptocurrency data:", error.message);
  }
};

module.exports = fetchCryptoData;