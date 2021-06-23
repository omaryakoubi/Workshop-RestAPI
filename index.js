const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(require("./routes"));

const PORT = 5000 || process.env.PORT;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server started on port ${PORT}`);
});
