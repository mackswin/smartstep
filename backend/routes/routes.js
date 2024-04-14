// For testing

const express = require("express");
const router = express.Router();

const { helloWorld } = require("../controllers/controller");
console.log("wwww")
router.get("/", helloWorld);
router.get("/new", helloWorld);



module.exports = router;
