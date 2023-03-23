const Todo = require("../models/todoModel");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ todos });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const getTodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findOne({ _id: todoId });
    if (!todo) {
      return res.status(404).json({ message: "No task found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findByIdAndUpdate(
      {
        _id: todoId,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!todo) {
      return res.status(404).json({ message: "No todo found" });
    }
    res.status(200).json({ id: todoId, data: req.body });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findByIdAndDelete({ _id: todoId });
    if (!todo) {
      return res.status(404).json({ message: "No todo found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  getTodo,
  deleteTodo,
};
