import express from "express";
import colors from "colors";
import router from "./routers/index.js";

const app = express();
app.use(express.json());
app.use("/", router);

const port = process.env.port || 3000;
app.listen(port, () =>
  console.log(`Server is running at port ${port}`.rainbow)
);
