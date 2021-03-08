const express = require("express"); //bring in express so we can use the router
const router = express.Router(); // this means we no longer do app.get app.post, we do router.get etc

// @route       Endpoint: POST api/users
// @desc        Register a user
// @access      Public (to register and become a private user)
router.post("/", (req, res) => {
  res.send("Register a user");
});

module.exports = router;
