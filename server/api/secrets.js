const express = require("express");
const router = express.Router();
const authMiddleware = require("./../middleware/authMiddleware");

const Secret = require("./../models/Secret");
const AuditLog = require("./../models/AuditLog");

// Helper function to log audit events
const logAuditEvent = async (userId, action, details) => {
  try {
    await AuditLog.create({
      userId,
      action,
      details,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error logging audit event:", error)
  }
}

// Get all secrets for a project
router.get("/", authMiddleware, async (req, res) => {
  const { projectId } = req.query 

  try {
    const secrets = await Secret.find({ projectId });
    if (!secrets || secrets.length === 0) {
      return res.status(404).json({ message: "No secrets found for project" });
    }

    await logAuditEvent(req.user.id, "READ", `Fetched all secrets for project ${projectId}`)

    res.status(200).json(secrets)
  } catch (error) {
    console.error("Error fetching secrets:", error);
    res.status(500).json({ message: "Error fetching secrets", error: error.message })
  }
})

// Create new secret
router.post("/:projectId", authMiddleware, async (req, res) => {
  const { projectId } = req.params
  const { key, value, version, useCase, killTime } = req.body

  if (!key || !value) {
    return res.status(400).json({ message: "Key and Value are required fields" })
  }

  try {
    const newSecret = new Secret({
      key,
      value,
      projectId,
      version: version || "1.0",
      useCase: useCase || "dev",
      killTime: killTime || "NA",
    })

    await newSecret.save()
    await logAuditEvent(req.user.id, "CREATE", `Created a new secret for project ${projectId}`)

    res.status(201).json(newSecret)
  } catch (error) {
    console.error("Error saving secret:", error)
    res.status(500).json({ message: "Error saving secret", error: error.message })
  }
});

// Update secret by ID
router.put("/:id", authMiddleware, async (req, res) => {
  const { id } = req.params
  const { key, value, version, useCase, killTime } = req.body

  try {
    const updatedSecret = await Secret.findByIdAndUpdate(
      id,
      { $set: { key, value, version, useCase, killTime } },
      { new: true, runValidators: true }
    );

    if (!updatedSecret) {
      return res.status(404).json({ message: "Secret not found" })
    }

    await logAuditEvent(req.user.id, "UPDATE", `Updated secret ${id}`)

    res.status(200).json(updatedSecret)
  } catch (error) {
    console.error("Error updating secret:", error)
    res.status(500).json({ message: "Error updating secret", error: error.message })
  }
})

// Delete secret by ID
router.delete("/:id", authMiddleware, async (req, res) => {
  const { id } = req.params

  try {
    const deletedSecret = await Secret.findByIdAndDelete(id)

    if (!deletedSecret) {
      return res.status(404).json({ message: "Secret not found" })
    }

    await logAuditEvent(req.user.id, "DELETE", `Deleted secret ${id}`)

    res.status(200).json({ message: "Secret deleted successfully", deletedSecret })
  } catch (error) {
    console.error("Error deleting secret:", error);
    res.status(500).json({ message: "Error deleting secret", error: error.message })
  }
})

module.exports = router
