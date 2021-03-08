//Auth will have a route to log in the user, and the other to get the logged in user

const express = require("express"); //bring in express so we can use the router
const router = express.Router(); // this means we no longer do app.get app.post, we do router.get etc

// @route       Endpoint: GET api/auth
// @desc        Get logged in user
// @access      Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route       POST api/auth
// @desc        Auth user & get token
// @access      Public (purpose is to authenticate token so you can get private routes)
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
