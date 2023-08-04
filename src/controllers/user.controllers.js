const bcrypt = require('bcrypt');
const UserServices = require("../services/user.services");

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser)
        res.status(201).json(result)
        const { id, username } = result;

    } catch (error) {
        res.status(400).json(error);
    }
}
const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await UserServices.getUser(username);
        if (!user) {
            return res.status(400).json({ error: 'El parámetro "username" es requerido.' });
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(400).json({ error: 'El parámetro "password" es requerido.' });
        }

    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser,
    login
}