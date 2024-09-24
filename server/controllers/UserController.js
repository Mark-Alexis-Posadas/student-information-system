const User = require("../models/User");

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json({ users });
};

const register = async (req, res) => {
  const { email, firstName, middleName, lastName, gender, password } = req.body;

  try {
    const newUser = await User.create({
      email,
      firstName,
      middleName,
      lastName,
      gender,
      password,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error.message); // Better logging
    res.status(500).json({ msg: "Server error" }); // Respond with an error message
  }
};

module.exports = { register, getUsers };
