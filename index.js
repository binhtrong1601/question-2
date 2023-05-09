const express = require("express");
const db = require("./db");
const productRouter = require("./routes/productRouter");
const app = express();

app.use('/api/products', productRouter);

app.listen(3000, () => {
  console.log("App is running at 3000");
  db.connectToDb();
});
