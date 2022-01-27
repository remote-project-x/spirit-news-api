const express = require("express");

// we might need to access all the routing params from parent as well,
// so the better practice is to have mergeParams: true
const router = express.Router({ mergeParams: true });

const controller = require("./controller");

//Create New User
router.post("/signup", controller.createNewUser);

//Login Existing User
router.post("/login", controller.loginUser);

//Get Back All Users
router.get("/users", controller.getAllUsers);

//Update User role By ObjectId
router.patch("/:id", controller.updateUserRoleById);

module.exports = router;
