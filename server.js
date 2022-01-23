const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const api = require("./api");

require("dotenv").config();

//Enable Cors
app.use(cors());

// Configuring parser middleware
//Parse URL-encoded bodies
// app.use(express.urlencoded());
//Used to parse JSON bodies
app.use(express.json());

// apis are available under /api prefix
app.use("/api/v1/", api);

// routes
app.use("/health-check", async (req, res) => {
  const version = require("./package.json").version;
  res.status(200).json({ message: "Ok", version });
});

// Constants
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "0.0.0.0";

// How to we start listining to the server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// Connect to database
connectDB();
