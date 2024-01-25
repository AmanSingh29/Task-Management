const Task = require("../Models/taskSchema");

// Function to create a Task..............
const createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;
  try {
    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "One or more feilds are mandatory!" });
    }
    const newTask = new Task({ title, description, dueDate });
    await newTask.save();
    return res
      .status(201)
      .json({ success: "Task Created Successfully", cardData: newTask });
  } catch (error) {
    return res.status(501).json({ error: "Internal Server Error!" });
  }
};

// Function to delete a Task.................
const deleteTask = async (req, res) => {
  try {
    const taskInDb = await Task.findById(req.params.id);
    if (!taskInDb) {
      return res.status(400).json({ error: "Task not awailable!" });
    }
    await Task.findByIdAndDelete(req.params.id);
    return res.status(202).json({ success: "Task Deleted Successfully!" });
  } catch (error) {
    return res.status(501).json({ error: "Internal Server Error!" });
  }
};

// Function to update a task................
const updateTask = async (req, res) => {
  const { title, description, dueDate } = req.body;
  try {
    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "One or more feilds are mandatory!" });
    }
    const taskInDb = await Task.findByIdAndUpdate(
      req.params.id,
      { title: title, description: description, dueDate: dueDate },
      { new: true }
    );
    return res
      .status(202)
      .json({ result: "Task Updated Successfully!", data: taskInDb });
  } catch (error) {
    return res.status(501).json({ error: "Internal Server Error!" });
  }
};

// Function to get all tasks...............
const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find();
    return res.status(200).json({ data: allTasks });
  } catch (error) {
    return res.status(501).json({ error: "Internal Server Error!" });
  }
};

// Function to set mark as complete to a task...............
const markAsComplete = async (req, res) => {
  const { isCompleted } = req.body;
  try {
    const checkComplete = await Task.findById(req.params.id);
    if (checkComplete.isCompleted) {
      return res.status(400).json({ err: "Task already completed!" });
    }
    const completeTask = await Task.findByIdAndUpdate(
      req.params.id,
      { isCompleted: true },
      { new: true }
    );
    return res.status(200).json({ msg: "Task Completed!", data: completeTask });
  } catch (error) {
    return res.status(501).json({ error: "Internal Server Error!" });
  }
};

module.exports = {
  createTask,
  deleteTask,
  updateTask,
  getAllTasks,
  markAsComplete,
};
