const express = require("express"); //bring in express so we can use the router
const router = express.Router(); // this means we no longer do app.get app.post, we do router.get etc
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");

// @route       Endpoint: POST api/users
// @desc        Register a user
// @access      Public (to register and become a private user)
// for check, the first parameter is the field you want to check, the second is message you want, then we add our rules
router.post(
  "/",
  [
    check("name", "Please add a name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); //gives us an array of errors–;
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email }); //findOne is a search method
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      user = new User({
        name,
        email,
        password,
      }); // created new instance of a user

      const salt = await bcrypt.genSalt(10); //encrypt password

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
