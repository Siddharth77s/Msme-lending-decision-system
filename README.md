# 🏦 MSME Lending Decision System

## 👤 Author
Siddharth Shinde  
PAN: ABCDE1234F  

---

## 📌 Project Overview

The MSME Lending Decision System is a full-stack application that simulates how digital lending platforms evaluate loan applications for MSMEs.

It collects business details, processes them through a rule-based credit scoring engine, and returns a structured loan decision.

---

## 🚀 Features

### ✅ Frontend
- MSME Loan Application Form
- Real-time input handling
- API integration with backend
- Decision display (Approved / Review / Rejected)
- Credit Score visualization
- Reason code display

### ✅ Backend
- REST API using Node.js + Express
- Credit Decision Engine
- Rule-based scoring system (0–100)
- Multi-factor risk analysis
- Input validation (PAN, missing fields, numeric checks)
- Error handling system

---

## 🧠 Decision Engine Logic

The scoring model is based on 4 key financial factors:

### 1. Revenue Strength (40%)
- High revenue → higher score
- Low revenue → risk deduction

### 2. EMI Burden Ratio (30%)
- Revenue vs monthly EMI comparison

### 3. Loan-to-Revenue Ratio (20%)
- High loan dependency increases risk

### 4. Tenure Stability (10%)
- Balanced tenure preferred (12–36 months)

---

## 📊 Decision Rules

| Score Range | Decision |
|------------|----------|
| 70 - 100 | APPROVED |
| 50 - 69 | REVIEW |
| 0 - 49 | REJECTED |

---

## 🔌 API Endpoint

### POST `/api/decision`

---

### 📥 Request Body
```json
{
  "name": "Siddharth Shinde",
  "pan": "ABCDE1234F",
  "businessType": "Retail",
  "revenue": 50000,
  "loanAmount": 10000,
  "tenure": 12,
  "purpose": "Working capital"
}
```

---

### 📤 Response
```json
{
  "decision": "APPROVED",
  "creditScore": 80,
  "reasons": [
    "LOW_REVENUE",
    "MODERATE_LOAN_RATIO"
  ]
}
```
## ⚠️ Edge Cases Handled
1) Missing required fields
2) Invalid PAN format
3)  Negative or zero values
4) Extreme loan-to-income ratios
---

## 🛠 Tech Stack
1) Frontend
React.js
CSS
2) Backend
Node.js
Express.js
PostgreSQL
---
## ▶️ How to Run
1) Backend
npm install
node server.js
2) Frontend
npm install
npm start
## 📌 Assumptions
- No authentication system required
- No persistent database in initial version
- Rule-based scoring used instead of ML for explainability
## 🔮 Future Improvements
- Machine learning-based scoring model
- Database audit logs
- Admin dashboard
- PDF report generation
- Cloud deployment

## 🎯 Key Highlights
1) End-to-end working fintech simulation
2) Explainable credit decision system
3) Clean modular architecture
4) Real-world lending logic simulation

---

## 📝 License

MIT License

---

## 📄 Acknowledgements

- [Frontend](https://github.com/Siddharth77s/Msme-lending-decision-system/tree/main/frontend)
- [Backend](https://github.com/siddharthshinde/MSME-Lending-Decision-System-Backend)
