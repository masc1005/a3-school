const { request, response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const jwt = require("jsonwebtoken");

const userModel = new User();

const login = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.readOneByEmail(email);

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "User or password incorrect",
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "User or password incorrect",
      });
    }

    const token = await jwt.sign(
      {
        uid: user.id,
        name: user.name,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "12h",
      }
    );

    res.json({
      ok: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

module.exports = {
  login,
};
