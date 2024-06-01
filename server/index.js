require("dotenv").config();

const express = require("express");

const { connectToMongoDB } = require("./databaase");
const router = require("./routes");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());
app.use("/api", router);
// app.get("/hello", (req, res) => {
//   res.status(200).json({ mssg: "hello people" });
// });

const port = process.env.PORT || 5000;

async function startServer() {
  await connectToMongoDB();

  app.listen(port, () => {
    console.log(`Server is listening on http://localhoast:${port}`);
  });
}

startServer();
