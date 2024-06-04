const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { task, status } = req.body;

  ToDoModel.create({ task, status }).then((data) => {
    console.log("Added Successfully");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, task } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { task })
    .then(() => {
      res.send("Updated Successfully...");
    })
    .catch((err) => console.log(err));
};
module.exports.updateStatusToDo = async (req, res) => {
  const { _id, status } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { status })
    .then(() => {
      res.send("Updated Status Successfully...");
    })
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  ToDoModel.findByIdAndDelete(_id)
    .then(() => {
      res.send("Deleted Successfully...");
    })
    .catch((err) => console.log(err));
};
