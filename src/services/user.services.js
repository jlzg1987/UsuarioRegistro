const User = require('../models/users.models');
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
      const userCreate = await User.create(newUser)
      return userCreate;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UserServices;