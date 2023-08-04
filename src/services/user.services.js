const User = require('../models/users.models');
const bcrypt = require('bcrypt');
class UserServices {
  static async getUser(username) {
    try {

      const user = await User.findOne({
        where: { username },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async create(newUser) {
    try {
      const hashed = await bcrypt.hash(newUser.password, 10)
      newUser.password = hashed
      const userCreate = await User.create(newUser)
      return userCreate;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UserServices;