import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postsRoutes from "./routes/postsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import getProfilesRoute from "./routes/getProfilesRoute.js";
import profileRoutes from "./routes/profileRoutes.js";


const app = express();

dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postsRoutes);
app.use("/auth", userRoutes);
app.use("/users", getProfilesRoute);
app.use("/profile", profileRoutes);

app.get('/', (req,res) => {
  res.send('Hello')
})

const host = '0.0.0.0';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(process.env.PORT || 5000,host, () => console.log("Server running on port: " + PORT))
  )
  .catch((error) => console.log(error));

//useNewUrlParser, useUnifiedTopology, useFindAndModify,
//  and useCreateIndex are no longer supported options.
//   Mongoose 6 always behaves as if useNewUrlParser,
//    useUnifiedTopology, and useCreateIndex are true,
//     and useFindAndModify is false.
//     Please remove these options from your code.
