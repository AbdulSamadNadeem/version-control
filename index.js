const express = require("express");
const app = express();
const router = require("./Routes/routes");
app.use(express.json());

app.use("/app", router);
app.listen(3000, () => {
  console.log("server is started");
});
