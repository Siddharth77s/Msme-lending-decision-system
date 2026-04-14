const express = require("express");
const cors = require("cors");

const decisionRoutes = require("./routes/decisionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", decisionRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});