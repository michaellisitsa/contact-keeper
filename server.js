const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Contact Keeper API" })
);

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

app.get("/about", (req, res) => res.send("Hello About"));

// proccess.env will look for env variable called port used in production
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
