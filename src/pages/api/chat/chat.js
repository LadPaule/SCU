const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");
const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();
app.options(
  "*",
  cors({ origin: "https://scu.vercel.app/" || "http://localhost:3000/", optionsSuccessStatus: 200 })
);
app.use(cors({ origin: "https://scu.vercel.app/" || "http://localhost:3000/", optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/", (req, res) => {});
app.use("/auth", authRoutes)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
