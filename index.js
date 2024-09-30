const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const Product = require("./models/product.model.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("hello from node api updated");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@backenddb.o9mt0.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });
