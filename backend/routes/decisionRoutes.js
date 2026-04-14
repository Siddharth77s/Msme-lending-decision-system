const express = require("express");
const router = express.Router();

const { processDecision } = require("../controllers/decisionController");

router.post("/decision", processDecision);

module.exports = router;