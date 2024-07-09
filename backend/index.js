const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/authRoutes/authRouter");
const hostRouter = require("./routes/hostRoutes/hostRouter");
const userRouter = require("./routes/userRoutes/userRouter");
app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: "https://www.algoarena.cloud/",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to Codenest API");
});
app.use("/auth", authRouter);
app.use("/host", hostRouter);
app.use("/user", userRouter);

app.listen(5000, () => {
  console.log("Server up !");
});
