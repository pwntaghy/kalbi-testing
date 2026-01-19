import userModels from "../models/userModels.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { fname, lname, email, number, password } = req.body;
    if (!fname || !lname || !email || !number || !password) {
      return res.status(400).json({
        message: "All fields are rquired",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be 6 characters" });
    }
    const existUser = await userModels.findOne({ email: email });
    if (existUser) {
      return res.status(200).json({
        success: true,
        message: "Already Register please login",
      });
    }
    console.log("already", existUser);
    //register user
    const hashedPassword = await hashPassword(password, 10);

    const user = await userModels.create({
      fname,
      lname,
      email,
      number,
      password: hashedPassword,
    });
    console.log("user create", user);

    res.status(201).json({
      success: true,
      message: "User Registred",
      user,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    const user = await userModels.findOne({ email: email });
    console.log("user", user);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "email is not registred",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res
        .status(200)
        .json({ success: false, message: "Invalid credentials" });
    }
    //token
    const token = JWT.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    console.log("token get", token);
    res.status(200).json({
      success: true,
      message: "login Succesfully",
      user: {
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        number: user.number,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//update profile
export const updateProfile = async (req, res) => {
  try {
    const { fname, lname, number } = req.body;

    if (!fname || !lname || !number) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const updatedUser = await userModels.findByIdAndUpdate(
      req.user.id,
      { fname, lname, number },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log("update error", error);
    res.status(500).json({
      success: false,
      message: "Error Updating Profile",
      error,
    });
  }
};

export const assignRole = async (req, res) => {
  try {
    const { role } = req.body;
    if (!["admin", "hr", "employee", "user"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Role",
      });
    }

    const user = await userModels.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Role updated, please submit extra details now",
      user,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Server error", error });
  }
};
