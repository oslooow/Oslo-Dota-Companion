const { verifyToken } = require("../helpers/index");
const { User } = require("../models");

async function authentication(req, res, next) {
  let { access_token } = req.headers;
  try {
    if (!access_token) {
      throw { name: "Unauthorized" };
    }
    let payload = verifyToken(access_token);
    let { id } = access_token;
    let toAuth = await User.findOne({ where: { id } });
    if (!toAuth) {
      throw { name: "Unauthorized" };
    }

    req.user = {
      id,
      username: toAuth.username,
      email: toAuth.email,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { authentication };
