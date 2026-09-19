const UserModel = require('../models/userModel');

class UserRepository {
    static async createUser(user) {
        return await UserModel.create(user);
    }

    static async userExists(email) {
        return await UserModel.findOne({ email: email });
    }
}

module.exports = UserRepository;