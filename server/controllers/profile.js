import mongoose from "mongoose";

import Profile from "../models/profile.js";

export const getProfiles = async (req, res) => {
  try {
    const users = await Profile.find().populate("user", ["name", "avatar"]);

    res.status(200).json(users.reverse());
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.userId,
    }).populate("user", ["name", "avatar"]);
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const updateProfile = async (req, res) => {
  const { bio, age, contacts } = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.userId)) {
    return res.status(404).send("No profile with that id");
  }

  const updatedProfile = { bio, age, contacts, _id: req.userId };
  console.log(updatedProfile);
  await Profile.findByIdAndUpdate(
    {
      user: req.userId,
    },
    updatedProfile,
    { new: true }
  ).populate("user", ["name", "avatar"]);

  res.json(updatedProfile);
};
