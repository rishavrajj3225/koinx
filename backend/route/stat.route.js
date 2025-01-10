import express from "express";

import { getCryptoData } from "../controllers/stat.controllers.js";

const router = express.Router();
router.route("/stat/:coin").get(getCryptoData);

export default router;
