var express = require("express");
var router = express.Router();
var contactusCrtl = require("../controller/contactus");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/contactus", contactusCrtl.getForm);
router.post("/contactus/handle_sumbit", contactusCrtl.handle_sumbit);

module.exports = router;
