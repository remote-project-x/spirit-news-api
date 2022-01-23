const express = require("express");

// we might need to access all the routing params from parent as well,
// so the better practice is to have mergeParams: true
const router = express.Router({ mergeParams: true });

const controller = require("./controller");

//Submit New News Data Form
router.post("/add-news", controller.addNewNews);

//Get Back All News Data
router.get("/all-news", controller.getAllNews);

//Get Single News Data By ObjectId
router.get("/:id", controller.getNewsById);

//Delete Single News Data By ObjectId
router.delete("/:id", controller.deleteNewsById);

//Update Single News Data By ObjectId
router.patch("/:id", controller.updateNewsById);

module.exports = router;
