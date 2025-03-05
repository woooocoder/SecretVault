const express = require("express");
const router = express.Router();
const { response } = require("express");
const authMiddleware = require("./../middleware/authMiddleware");

const Secret = require("./../models/Secret");
// get all secrets for a project
router.get("/", authMiddleware, async (req, res) => {
  const { projectId } = req.params

  try {
    const secrets = await Secret.find({ projectId })
    if (!secrets || secrets.length === 0) {
      return res.status(404).json({ message: "No secrets found for project" })
    }

    res.status(200).json(secrets)
  } catch (error) {
    console.error("Error fetching secrets:", error)
    res
      .status(500)
      .json({ message: "Error fetching secrets", error: error.message })
  }
});

// create new secret
/**
 * POST /api/secrets/65e2f3b9a3c5f4a2b6d1e7c8
Headers:
    Content-Type: application/json
    Authorization: Bearer <token>
Body:
{
    "key": "API_KEY",
    "value": "123456789abcdef",
    "version": "1.2",
    "useCase": "prod",
    "killTime": "1w"
}
 */
router.post("/:projectId", authMiddleware, async (req, res) => {
  const { projectId } = req.params;
  const { key, value, version, useCase, killTime } = req.body;

  if (!key || !value) {
    return res
      .status(400)
      .json({ message: "Key and Value are required fields" })
  }

  try {
    const newSecret = new Secret({
      key,
      value,
      projectId,
      version: version || "1.0",
      useCase: useCase || "dev", // dev beta prod test
      killTime: killTime || "NA", // 1d 1h 1w etc
    });

    await newSecret.save()

    res.status(201).json(newSecret)
  } catch (error) {
    console.error("Error saving secret:", error)
    res
      .status(500)
      .json({ message: "Error saving secret", error: error.message })
  }
});

// update secret @ id
/**
 * Headers:
    Content-Type: application/json
    Authorization: Bearer <token>
Body:
{
    "value": "newUpdatedValue",
    "version": "2.0"
}
 */
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

        res.status(200).json(updatedSecret)
    } catch (error) {
        console.error("Error updating secret:", error)
        res.status(500).json({ message: "Error updating secret", error: error.message })
    }
})

// delete secret @ id
router.delete("/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSecret = await Secret.findByIdAndDelete(id)

        if (!deletedSecret) {
            return res.status(404).json({ message: "Secret not found" })
        }

        res.status(200).json({ message: "Secret deleted successfully", deletedSecret })
    } catch (error) {
        console.error("Error deleting secret:", error);
        res.status(500).json({ message: "Error deleting secret", error: error.message })
    }
})

module.exports = router
