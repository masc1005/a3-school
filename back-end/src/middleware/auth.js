const { request, response } = require("express");
const jwt = require("jsonwebtoken");

const authMiddleware = (req = request, res = response, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "There is no token in the request",
    });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.JWT_SECRET);

    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token is not valid",
    });
  }

  next();
};

module.exports = {
  authMiddleware,
};
