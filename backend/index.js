import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Database connection successful!");
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`app is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR : ", error);
    throw error;
  }
})();
