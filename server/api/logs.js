const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const AuditLog = require("../models/AuditLog");

// Fetch logs for a specific project (readonly)
router.get("/logs", authMiddleware, async (req, res) => {
  const { projectId } = req.query;

  try {
    const logs = await AuditLog.find({ details: { $regex: projectId, $options: "i" } })
      .sort({ timestamp: -1 })
      .limit(50); // Limit to last 50 logs

    if (!logs.length) {
      return res.status(404).json({ message: "No logs found for project" });
    }

    res.status(200).json(logs);
  } catch (error) {
    console.error("Error fetching audit logs:", error);
    res.status(500).json({ message: "Error fetching logs", error: error.message });
  }
});

module.exports = router;
