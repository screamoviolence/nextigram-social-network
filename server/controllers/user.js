import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Profile from "../models/profile.js";
import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res
        .status(404)
        .json({ message: "User with this email doesnt exist" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "sometext"
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  const profileFields = {};
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(404)
        .json({ message: "User with this email already exist." });
    if (password != confirmPassword) {
      return res.status(404).json({ message: "Passwords has not confirmed" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign(
      { email: result.email, id: result._id },
      "sometext",
      {
        expiresIn: "1h",
      }
    );

    profileFields.user = result._id;
    
    const profile = await Profile.create(profileFields);
    await profile.save();

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};



