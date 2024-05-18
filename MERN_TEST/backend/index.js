const express = require("express");
const database = require("./databaseConnection");
const router = require("./routes/customer");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

// Set storage engine
database();

const PORT = process.env.PORT;
const app = express();
app.use(cors());

// INITIALIZE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", router);
app.use(express.static(__dirname + "public"));
app.use("/uploads", express.static("./uploads"));
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
