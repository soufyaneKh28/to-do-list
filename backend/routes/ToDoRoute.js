const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
  updateStatusToDo,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.put("/update", updateToDo);
router.put("/updateStatus", updateStatusToDo);
router.delete("/delete", deleteToDo);

module.exports = router;
