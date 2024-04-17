// routes/systemInfoRoute.js
const express = require("express");
const router = express.Router();
const infoController = require("../controllers/systemInfoController");


/*** define the routes **/

// check server is available 
router.get("/ping",(req, res) => {  
  return res.send({
    status: "Healthy",
  });
});

// return all required server details 
router.get("/info",infoController.systemInfo);


module.exports = router;