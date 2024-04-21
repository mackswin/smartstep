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
router.post("/forgetPassword", forgetPassword);
router.post("/resetPassword", resetPassword)
router.post("/completeUserProfile", completeUserProfile);
router.get("/getUserProfile", getUserProfile)

module.exports = router;
