require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const songRoutes = require("./routes/songsRoutes");
const playListRoutes = require("./routes/playListsRoutes");
const searchRoutes = require("./routes/searchRoutes");
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/users/", userRoutes);
app.use("/api/login/", authRoutes);
app.use("/api/songs/", songRoutes);
app.use("/api/playlists/", playListRoutes);
app.use("/api/", searchRoutes);


app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}...`));
