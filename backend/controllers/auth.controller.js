import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signUpUser = async (req, res) => {
  try {
    const { fullName, email, username, password, confirmPassword, gender } =
      req.body;

    if (password != confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    if (!fullName || !email || !username || !password || !gender) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    //HASH PASSWORD LOGIC HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      email,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      // Generate JWT token here
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log(
      "System has thrown an error in signup controller:",
      error.message
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCrt = await bcrypt.compare(password, user.password);

    if (!user || !isPasswordCrt) {
      return res.status(400).json({ error: "Invalid Username or Password" });
    }

    // Generate a token and set it as a cookie
    generateTokenAndSetCookie(user._id, res);

    // Respond with user details
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error(
      "System has thrown an error in login controller: ",
      error.message
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged Out Successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
