const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: true}))

app.use('/api/auth', require('./routes/auth.rout'));
app.use('/api/link', require('./routes/link.rout'))

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect("mongodb://localhost/mern"),
      {
        useUnifiedTopology: true,
      };
    app.listen(5000, () => console.log(`app started on port ${PORT}...`));
  } catch (e) {
    process.exit(1);
  }
}

start();
