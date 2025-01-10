import { Currency } from "../models/currency.model.js";

const getStandardDeviation = async (req, res) => {
    
    try {
        const { coinId } = req.params;
        console.log(coinId);
        const currencies = await Currency.find({ currency: coinId })
            .sort({ createdAt: -1 })
            .limit(100)
            .select('price_usd');

        if (currencies.length === 0) {
            return res.status(404).json({ message: "No prices found for the specified coin." });
        }

        const values = currencies.map(currency => currency.price_usd);
        const mean = values.reduce((acc, val) => acc + val, 0) / values.length;
        const variance = values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / values.length;
        const standardDeviation = Math.sqrt(variance);

        res.json({ standardDeviation });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getStandardDeviation };


