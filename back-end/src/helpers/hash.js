const { hash, compare } = require("bcryptjs");

async function generateHash(password) {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
}

async function comparePasword(password, hashedPassword) {
  const passwordMatch = await compare(password, hashedPassword);
  return passwordMatch;
}

module.exports = {
  generateHash,
  comparePasword,
};
