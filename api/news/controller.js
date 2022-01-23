const mongoose = require("mongoose");
const News = require("./model");

//Add New News Data Form
exports.addNewNews = async (req, res) => {
  const news = new News(req.body);

  try {
    const saveNews = await news.save();
    res.status(201).json({ message: "Created!", data: saveNews });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//Get Back All News Data
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json({ message: "Fetched!", data: news });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Get Single News Data By ObjectId
exports.getNewsById = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No news with that id");

    const news = await News.find({
      _id,
    });
    res.status(200).json({ message: "Fetched!", data: news });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Delete Single News Data By ObjectId
exports.deleteNewsById = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No news with that id");
  
    await News.deleteOne({
      _id,
    });
  
    res.status(200).json({ message: "Deleted!" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Update Single News Data By ObjectId
exports.updateNewsById = async (req, res) => {
  try {
    const { name, description, defaultValue } = req.body;

    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No news with that id");
    const news = await News.findById(_id);
    await news.updateOne({
      $set: req.body,
    });
    res.status(200);
    res.status(200).json({ message: "Updated!", data: news });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
