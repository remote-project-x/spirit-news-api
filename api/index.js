const express = require("express");
const router = express.Router();

/** --route:import-- */
const news = require("./news");
// const checkpoint = require("./checkpoint");

/** --route-- */
router.use(news.config.ENDPOINT, news.route);
// router.use(checkpoint.config.ENDPOINT, checkpoint.route);

router.get("/", (req, res) => {
  res.send("Application is running!");
});

module.exports = router;
