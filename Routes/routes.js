const express =  require('express')
const router = express.Router()

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

module.exports = router