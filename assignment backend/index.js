const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./db/Connecion");
const PORT = 5000;

connectToDb();

app.use(express.json());
app.use(cors());

//models
require("./Models/cardSchema");

//Routes
app.use("/api", require("./Routes/cardRoutes"));

app.listen(PORT, () => {
  console.log(`Server has startes at ${PORT}`);
});
