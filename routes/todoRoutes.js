const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  updateTodo,
  getTodo,
  deleteTodo,
} = require("../controllers/todosController");

router.route("/todos").get(getAllTodos).post(createTodo);
router.route("/todo/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);

module.exports = router;
