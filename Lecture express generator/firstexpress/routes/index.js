var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("products");
});

router.get("/product", function (req, res, next) {
  res.send("hello products");
});

router.get("/contact-us", function (req, res, next) {
  res.render("contact-us");
});

module.exports = router;
