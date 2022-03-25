const express = require("express");
const cors = require("cors");

const { getCompliment,
  getFortune,
  newCompliment} = require("./controller-S")

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/newCompliment", newCompliment);


app.listen(4000, () => console.log("Server running on 4000"));
