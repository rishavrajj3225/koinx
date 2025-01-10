
import axios from "axios";
const options = {
  method: "GET",
  url: "https://api.coingecko.com/api/v3/simple/price",
  params: {
    ids: "bitcoin,ethereum,matic-network",
    vs_currencies: "usd",
    include_market_cap: false,
    include_24hr_vol: false,
    include_24hr_change: true,
    include_last_updated_at: true,
  },
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-e7xk31VYXoLsXVcf3HuheiqU",
  },
};

axios
  .request(options)
  .then((res) => {
    console.log("Response from CoinGecko API:", res.data);
  })
  .catch((err) => {
    console.error("Error fetching data from CoinGecko API:", err);
  });
