const express = require("express");
const router = express.Router();
const Staff = require("../Model/StaffModel");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Staff.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
