const express = require("express");
const router = express.Router();

/** --route:import-- */
const auth = require("./auth");
const news = require("./news");

/** --route-- */
router.use(auth.config.ENDPOINT, auth.route);
router.use(news.config.ENDPOINT, news.route);

router.get("/", (req, res) => {
  res.send("Application is running!");
});

module.exports = router;
