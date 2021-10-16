import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  user: {
    ref: "user",
    type: mongoose.Schema.Types.ObjectId,
  },
  bio: { type: String, default: "" },
  age: { type: Number, default: ""},
  contacts: {
    youtube: {
      type: String,
      default: '',
    },
    facebook: {
      type: String,
      default: '',
    },
    linkedin: {
      type: String,
      default: '',
    },
    instagram: {
      type: String,
      default: '',
    },
  },
});

const Profile = mongoose.model("profile", profileSchema);

export default Profile;
