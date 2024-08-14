const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  console.log(token);

  res.cookie("jwt", token, {
    httpOnly: true,
    // secure: process.env.NODE_ENV !== "development",
    secure: false,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

module.exports = generateToken;
