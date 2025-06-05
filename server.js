const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "OTP Verification API is running" });
});

app.post("/api/auth-code", (req, res) => {
  const { otp } = req.body;

  console.log("Received OTP:", otp);

  if (otp === "412378") {
    return res.status(204).send();
  } else {
    return res.status(403).send();
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
