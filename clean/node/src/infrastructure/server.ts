import express from "express";
import router from "./router";
import bodyParser from "body-parser";
import userRouter from "./routes/user";
import taskRouter from "./routes/task";

const app = express();

// bodyがundefinedにならないように
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route設定
app.use("/api/tasks", taskRouter);
app.use("/api/users", userRouter);

app.listen(3001, () => {
  console.log("listening on port 3001");
});

export default app;
