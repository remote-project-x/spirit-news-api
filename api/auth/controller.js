const mongoose = require("mongoose");
const Auth = require("./model");

//Create New User
exports.createNewUser = async (req, res) => {
  const userBody = new Auth(req.body);

  try {
    const user = await Auth.find({ email: req.body.email });
    if (user.length >= 1) {
      res.status(409).json({ message: "Email Already Exists!" });
    } else {
      const saveUser = await userBody.save();
      res
        .status(201)
        .json({ message: "New User Created Successfully|!", user: saveUser });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//Login Existing User
exports.loginUser = async (req, res) => {
  try {
    const user = await Auth.findOne({ email: req.body.email });
    if (user) {
      if (user.password == req.body.password) {
        res.status(201).json({ message: "Login Successfully!" });
      } else {
        res.status(201).json({ message: "Password Incorrect!" });
      }
    } else {
      res.status(201).json({ message: "User not found!" });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//Get Back All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Auth.find();
    const totalUsers = await Auth.count();
    res
      .status(200)
      .json({ status: "ok", totalUsers: totalUsers, users: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Update User role By ObjectId
exports.updateUserRoleById = async (req, res) => {
  try {
    const { role } = req.body;

    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No user with that id");
    const user = await Auth.findById(_id);
    await user.updateOne({
      $set: req.body,
    });
    res.status(200);
    res.status(200).json({ message: "User Role Updated Successfully!" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
