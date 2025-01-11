import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {fetchCryptoData } from "./controllers/fetchdata.controller.js";
import cron from "node-cron";


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
cron.schedule("0 */2 * * *", async () => {
    try {
        await fetchCryptoData();
        console.log("Crypto data fetched successfully");
    } catch (error) {
        console.error("Error fetching crypto data: ", error);
    }
});

import devationRoute from "./route/devation.route.js";
app.use("/api", devationRoute);
import stat from "./route/stat.route.js";
app.use("/api", stat);

app.get("/fetch", async (req, res) => {
  try {
    const data = await fetchCryptoData();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching crypto data");
  }
});

app.get("/", (_, res) => {
  res.send("This is my assignment , please go to   /api/devation/coin  or /api/stat/coin to get info  here replace coin with the coin name");
});
const port=process.env.PORT||3000;
const url = process.env.MONGODB_URI;
(async () => {
  try {
    await mongoose.connect(url);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
    app.listen(port, () => {
      console.log(`app is running on port ${port}`);
    });
  } catch (error) {
    console.error("ERROR : ", error);
    throw error;
  }
})();


