const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  createJWT: function (currentUserId) {
    const payload = {
      id: currentUserId,
    };

    const token = jwt.sign(payload, "teste"); //mudar senha para senha do .env
  },
};
