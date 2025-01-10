import axios from 'axios';

const getCryptoData = async (req, res) => {
    const { coin } = req.params;
    const lowerCaseCoin = coin.toLowerCase();
    const options = {
        method: "GET",
        url: "https://api.coingecko.com/api/v3/simple/price",
        params: {
            ids: lowerCaseCoin,
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

    try {
        const response = await axios.request(options);
        const data = response.data[lowerCaseCoin];
        const formattedData = {
            price: data.usd,
            marketCap: data.usd_market_cap,
            "24hChange": data.usd_24h_change,
        };
        res.status(200).json(formattedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { getCryptoData };
