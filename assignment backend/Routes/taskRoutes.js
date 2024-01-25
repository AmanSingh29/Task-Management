const express = require("express");
const router = express.Router();
const {
  markAsComplete,
  getAllTasks,
  updateTask,
  deleteTask,
  createTask,
} = require("../Controller/taskControllers");

//api to create a Task
router.post("/create-task", createTask);

//api to deleten a Task
router.delete("/delete-task/:id", deleteTask);

//api to update a Task
router.put("/update-task/:id", updateTask);

//api to get all Tasks
router.get("/get-tasks", getAllTasks);

//api to mark as complete to a task
router.put("/mark-as-complete/:id", markAsComplete);

module.exports = router;
