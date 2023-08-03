
const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (typeof ('username') !== 'string' || !username) {
            return res.status(400).json({
                error: 'Invalid username',
                message: 'Username canot be null or diferent to string'
            });
        }
        if (typeof ('password') !== 'string' || !password) {
            return res.status(400).json({
                error: 'Invalid password',
                message: 'password canot be null or diferent to string'
            });

        }
        await Users.create({ username, password })
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);
    }
}
module.exports = {
    createUser
}