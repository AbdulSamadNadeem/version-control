const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());

router.get("/get", async (req, res) => {
  return res.status(200).json({
    message: "success",
    data: "Hello from server",
  });
});

router.get("/api", async (req, res) => {
  return res.status(200).json({
    message: "success",
    data: "Hello from Dev",
  });
});
router.get("/server", async (req, res) => {
  return res.status(200).json({
    message: "success",
    data: "Hello from gitDev",
  });
});

app.use("/app", router);
app.listen(3000, () => {
  console.log("server is started");
});
