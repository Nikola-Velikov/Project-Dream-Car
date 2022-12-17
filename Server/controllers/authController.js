const { register, getAllUsers, getUserById, login } = require('../services/authService');
const authContoller = require('express').Router();


authContoller.post('/register', async function (req, res) {
    try{
        const token = await register(req.body.email, req.body.password);
        res.send(JSON.stringify({
            result: token,
            notErr: true,
        }));
    } catch (err) {
        res.send(JSON.stringify({
            notErr: false,
            error: err.message,
        }));
        throw err; 
    } 
});

authContoller.get('/users', async (req, res) => {

    const allUsers = await getAllUsers();
    res.send({
        notErr: true,
        result: allUsers,
    });
});

authContoller.post('/login', async (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
    }
    try{
        const token = await login(user);
        res.send({
            notErr: true,
            result: token,
        })

    }catch(err) {
        res.send({
            notErr: false,
            error: err.message
        })
    }

})

authContoller.get('/users/:id', async (req, res) => {

    const user = await getUserById(req.params.id);
    res.send({notErr: true, result: user});
})




module.exports = authContoller;