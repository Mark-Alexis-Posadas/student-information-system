const User = require("../models/User");

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json({ users });
};

const register = async (req, res) => {
  const { email, name, gender, password } = req.body;

  try {
    const newUser = await User.create({
      email,
      name,
      gender,
      password,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The Password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = { register, getUsers, login };
