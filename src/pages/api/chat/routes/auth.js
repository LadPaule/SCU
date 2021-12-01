const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/auth");

// router.post('/signUp', signup);
router.post("/signup", function () {
  signup;
});
router.post("/login", function () {
  login;
});

module.exports = router;
