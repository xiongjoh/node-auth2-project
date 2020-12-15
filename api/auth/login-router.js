const router = require("express").Router();
const Users = require("../users/users-model");
const bcryptjs = require("bcryptjs");

const makeToken = require("../makeToken");

const userIsValid = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findBy({ username: username });
    if (user && bcryptjs.compareSync(password, user.password)) {
      req.body.token = makeToken(user);
      next()
    } else {
      res.status(401).json({ message: `You Shall Not Pass!` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

router.post("/", userIsValid, async (req, res) => {
    const { username, token} = req.body
    res.status(200).json({message:`Welcome to our API ${username}`, token})
});

module.exports = router;
