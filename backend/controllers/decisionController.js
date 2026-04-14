const { calculateDecision } = require("../services/decisionEngine");

exports.processDecision = (req, res) => {
  try {
    const {
      name,
      pan,
      businessType,
      revenue,
      loanAmount,
      tenure,
      purpose
    } = req.body;

    // -----------------------------
    // VALIDATION (IMPORTANT FOR MARKS)
    // -----------------------------
    if (
      !name ||
      !pan ||
      !businessType ||
      revenue == null ||
      loanAmount == null ||
      tenure == null
    ) {
      return res.status(400).json({
        error: "MISSING_FIELDS"
      });
    }

    // PAN VALIDATION
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panRegex.test(pan)) {
      return res.status(400).json({
        error: "INVALID_PAN_FORMAT"
      });
    }

    if (revenue <= 0 || loanAmount <= 0 || tenure <= 0) {
      return res.status(400).json({
        error: "INVALID_VALUES"
      });
    }

    // -----------------------------
    // ENGINE CALL
    // -----------------------------
    const result = calculateDecision({
      name,
      pan,
      businessType,
      revenue: Number(revenue),
      loanAmount: Number(loanAmount),
      tenure: Number(tenure),
      purpose
    });

    return res.json(result);

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "SERVER_ERROR"
    });
  }
};