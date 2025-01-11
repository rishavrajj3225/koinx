import express from "express";

import { getStandardDeviation } from "../controllers/standardDev.controllers.js";

const router = express.Router();
router.route("/deviation/:coinId").get(getStandardDeviation);

export default router;
