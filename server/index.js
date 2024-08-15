const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Root page");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
