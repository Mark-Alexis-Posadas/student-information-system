const User = require("../models/User");
const register = async (req, res) => {
  const { email, firstName, middleName, lastName, gender, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });
    user = new User({
      email,
      firstName,
      middleName,
      lastName,
      gender,
      password,
    });
    await user.save();
    res.status(201).json({ msg: "User registered" });
  } catch (error) {}
};
