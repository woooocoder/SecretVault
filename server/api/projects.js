const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const authMiddleware = require("../middleware/authMiddleware");

// Get all projects
router.get("/", authMiddleware, async (req, res) => {
    try {
        const projects = await Project.find()
        res.status(200).json(projects)
    } catch (error) {
        console.error("Error fetching projects:", error)
        res.status(500).json({ message: "Error fetching projects", error: error.message })
    }
});

// Get a project by ID or Name
router.get("/:val", authMiddleware, async (req, res) => {
    const { val: val } = req.params

    try {
        let project;
        if (val.match(/^[0-9a-fA-F]{24}$/)) { 
            project = await Project.findById(val)
        } else { 
            project = await Project.findOne({ name: new RegExp(`^${val}$`, "i") })
        }

        if (!project) {
            return res.status(404).json({ message: "Project not found" })
        }

        res.status(200).json(project)
    } catch (error) {
        console.error("Error fetching project:", error)
        res.status(500).json({ message: "Error fetching project", error: error.message })
    }
});

// Delete a project (only by creator)
router.delete("/:id", authMiddleware, async (req, res) => {
    const { id } = req.params 
    const userId = req.user.id 

    try {
        const project = await Project.findById(id)

        if (!project) {
            return res.status(404).json({ message: "Project not found" })
        }
 
        if (project.createdBy !== userId) {
            return res.status(403).json({ message: "Unauthorized: Only the creator can delete this project" })
        }

        await Project.findByIdAndDelete(id)
        res.status(200).json({ message: "Project deleted successfully" })
    } catch (error) {
        console.error("Error deleting project:", error)
        res.status(500).json({ message: "Error deleting project", error: error.message })
    }
});

module.exports = router
