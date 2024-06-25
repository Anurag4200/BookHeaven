import userModel from "../models/user.js";
import bcrypt from "bcrypt";

// ho gya signup ka kaam
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await userModel.findOne({ email });
    if (userExist) return res.status(500).json({ message: "User Already Exist" });;
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const user = await new userModel({ name, email, password: hash });

        await user.save();
        res.status(201).json({ message: "user created successfully",user});
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
  }
};

// login ka kaam
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await userModel.findOne({ email });
        if (!userExist) return res.status(500).json({ message: "Invalic Credential" })
        bcrypt.compare(password, userExist.password, function(err, result) {
            if (result) {
                res.status(200).json({ message: "login successfully",userExist });
            }
            else {
                res.status(500).json({ message: "Invalic Credential" });
                
            }
            
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "Invalic Credential" });

    }
};