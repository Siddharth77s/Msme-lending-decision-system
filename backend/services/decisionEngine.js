exports.calculateDecision = (data) => {
  const { revenue, loanAmount, tenure } = data;

  const reasons = [];
  let score = 0;

  // -----------------------------
  // 1. Revenue Score (40)
  // -----------------------------
  if (revenue >= 200000) {
    score += 40;
  } else if (revenue >= 100000) {
    score += 30;
    reasons.push("MEDIUM_REVENUE");
  } else if (revenue >= 50000) {
    score += 20;
    reasons.push("LOW_REVENUE");
  } else {
    score += 10;
    reasons.push("VERY_LOW_REVENUE");
  }

  // -----------------------------
  // 2. EMI Risk (30)
  // -----------------------------
  const emi = loanAmount / tenure;
  const ratio = revenue / emi;

  if (ratio >= 5) {
    score += 30;
  } else if (ratio >= 3) {
    score += 22;
    reasons.push("MODERATE_EMI_RISK");
  } else if (ratio >= 1.5) {
    score += 15;
    reasons.push("HIGH_EMI_RISK");
  } else {
    score += 5;
    reasons.push("VERY_HIGH_EMI_RISK");
  }

  // -----------------------------
  // 3. Loan Burden (20)
  // -----------------------------
  const loanRatio = loanAmount / revenue;

  if (loanRatio <= 1) {
    score += 20;
  } else if (loanRatio <= 3) {
    score += 15;
    reasons.push("MODERATE_LOAN_RATIO");
  } else if (loanRatio <= 5) {
    score += 8;
    reasons.push("HIGH_LOAN_RATIO");
  } else {
    score += 2;
    reasons.push("VERY_HIGH_LOAN_RATIO");
  }

  // -----------------------------
  // 4. Tenure Risk (10)
  // -----------------------------
  if (tenure >= 12 && tenure <= 36) {
    score += 10;
  } else if (tenure < 12) {
    score += 5;
    reasons.push("SHORT_TENURE");
  } else {
    score += 7;
    reasons.push("LONG_TENURE");
  }

  // -----------------------------
  // FINAL SCORE
  // -----------------------------
  score = Math.min(100, Math.max(0, score));

  // -----------------------------
  // DECISION RULE
  // -----------------------------
  let decision = "REJECTED";

  if (score >= 70) decision = "APPROVED";
  else if (score >= 50) decision = "REVIEW";

  // -----------------------------
  // DEFAULT REASON
  // -----------------------------
  if (reasons.length === 0) {
    reasons.push("STABLE_PROFILE");
  }

  return {
    decision,
    creditScore: score,
    reasons
  };
};