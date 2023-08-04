const { Router } = require('express');
const { User } = require('../models/users.models');
const router = Router();

router.post('/api.demoblaze.com/login', async (req, res) => {
    const { username } = req.body;


    if (!username) {
        return res.status(400).json({ error: 'El parámetro "username" es requerido.' });
    }
    try {

        const user = await User.findOne({
            where: {
                username
            },
        });

        res.json({ user });
    } catch (error) {

        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Hubo un error en el servidor.' });
    }
}

);


module.exports = router;