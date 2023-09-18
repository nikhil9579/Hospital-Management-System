const express = require("express");
const router = new express.Router();
router.get("/sign-up", async (req, res) => {
    res.render("sign-up");
  });
module.exports = router;
