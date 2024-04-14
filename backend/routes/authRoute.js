const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/authMiddleware");

const {
  signup,
  login,
  forgetPassword,
  resetPassword,
  completeUserProfile,
  getUserProfile
} = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
