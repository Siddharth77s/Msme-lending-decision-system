const express = require("express");
const cors = require("cors");

const decisionRoutes = require("./routes/decisionRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", decisionRoutes);

// 🔥 IMPORTANT FIX FOR DEPLOYMENT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});