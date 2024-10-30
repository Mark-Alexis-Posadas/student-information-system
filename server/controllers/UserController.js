const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json({ users });
};

const register = async (req, res) => {
  const { email, name, gender, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      email,
      name,
      gender,
      password: hashedPassword,
    });
    res.send({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  } catch (error) {
    res.status(500).json("An error occurred");
  }
};

const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Could not log out" });
    }
    res.json({ message: "Logged out successfully" });
  });
};

module.exports = { register, getUsers, login, logout };
