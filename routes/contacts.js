const express = require("express"); //bring in express so we can use the router
const router = express.Router(); // this means we no longer do app.get app.post, we do router.get etc

// @route       GET api/contacts
// @desc        Get all users contacts
// @access      Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route       POST api/contacts
// @desc        Add new contact
// @access      Private
router.post("/", (req, res) => {
  res.send("Add contacts");
});

// @route       PUT api/contacts/:id
// @desc        Update contact
// @access      Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route       DELETE api/contacts/:id
// @desc        Delete contact
// @access      Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
