const simpleCRUD = require("../business/simpleCRUD");
const bcrypt = require("bcrypt");
const salt = 12;

module.exports = {
  hashPassword: function (password, salt) {
    return bcrypt.hash(password, salt);
  },

  checkPassword: function (username, password) {
    return new Promise(async (resolve, reject) => {
      const user = (await simpleCRUD.getRowByUsername(username, "username, password_hash, id"))[0];

      //mudar columns para array


      if (!user) {
        return reject("Confira username e password e tente novamente");
      } else {
        resolve(bcrypt.compare(password, user.password_hash));
      }
    });
  },
};
