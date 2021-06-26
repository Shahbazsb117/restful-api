const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
require("./src/db/conn");
require("./src/models/product");
const productRoute = require("./src/routes/product");

app.use(express.json());
app.use(productRoute);

app.listen(port, () => {
  console.log(`Server is listenig at  ${port}`);
});
