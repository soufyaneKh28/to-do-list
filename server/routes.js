const express = require("express");

const router = express.Router();
const { getConnectedClient } = require("./databaase");
const { ObjectId } = require("mongodb");
const getCollection = () => {
  const client = getConnectedClient();
  const collection = client.db("todosdb").collection("todos");
  return collection;
};

//get /todos
router.get("/todos", async (req, res) => {
  const collection = getCollection();
  const todos = await collection.find({}).toArray();
  res.status(200).json(todos);
});

//post /todos
router.post("/todos", async (req, res) => {
  const collection = getCollection();
  const { todo } = req.body;
  const newTodo = await collection.insertOne({ todo, status: false });
  console.log(req.body);
  res.status(201).json({ todo, status: false, _id: newTodo.insertedId });
});

//delete /todos/:id
router.delete("/todos/:id", async (req, res) => {
  const collection = getCollection();
  const _id = new ObjectId(req.params.id);
  const deletedTodo = await collection.deleteOne({ _id });
  res.status(200).json(deletedTodo);
});
//put /todos/:id
router.put("/todos/:id", async (req, res) => {
  const collection = getCollection();
  const _id = new ObjectId(req.params.id);
  const { status } = req.body;

  const updatedToDo = await collection.updateOne(
    { _id },
    { $Set: { status: !status } }
  );

  res.status(200).json(updatedToDo);
});

module.exports = router;
