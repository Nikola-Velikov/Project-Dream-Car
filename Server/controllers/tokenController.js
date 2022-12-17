const User = require("../models/user.js");

const tokenController = require("express").Router();

tokenController.get("/:id", async function (req, res) {
    try {
        let id = req.params.id
        console.log(id);
        let user = await User.findById(id)
        console.log(user);
        res.send('Valid');
    } catch (error) {
        res.send('Invalid');
        
    }

});

module.exports = tokenController;
