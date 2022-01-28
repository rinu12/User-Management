const express = require("express"); //import express
const app = express();
app.listen(3000, () => {
  console.log("server started at port :3000");
});

app.use(express.json()); //parsing json format to object
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", require("./routes/api/users"));
app.get("/", (req, res) => {
  res.status(401).send("THIS IS A GET METHOD");
});
