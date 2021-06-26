const express = require("express");
const router = new express.Router();
const Product = require("../models/product");

router.get("/", (req, res) => {
  res.send("Wellcome to KFC");
});

// C
router.post("/product", async (req, res) => {
  try {
    // console.log(req.body);
    const product = new Product(req.body);
    const result = await product.save();
    res.status(201).send(result);
  } catch (error) {
    // console.log(error)
    res.status(400).send(error);
  }
});
// R
router.get("/product", async (req, res) => {
  try {
    const result = await Product.find();
    res.status(201).send(result);
  } catch (error) {
    // console.log(error)
    res.status(400).send(error);
  }
});
// U
router.patch("/product/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Product.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(400).send("No Product Found");
    } else {
      return res.status(201).send(product);
    }
  } catch (error) {
    res.status(400).send("Error to find product : " + error.message);
  }
});
// D
router.delete("/product/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Product.findByIdAndDelete(_id);
    if (!product) {
      return res.status(400).send("No Product Found");
    } else {
      return res.status(201).send(product);
    }
  } catch (error) {
    res.status(400).send("Error to find product : " + error.message);
  }
});

module.exports = router;
