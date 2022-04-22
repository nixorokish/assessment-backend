const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json()); // When we want to be able to accept JSON.
app.use(cors());

const { getCompliment,
  getFortune,
  newCompliment,
  getAllCompliments,
  searchCompliments} = require("./controller-S")



app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/allCompliments", getAllCompliments);

app.post("/api/queryResults", searchCompliments)
app.post("/api/newCompliment", newCompliment);


app.listen(4000, () => console.log("Server running on 4000"));
