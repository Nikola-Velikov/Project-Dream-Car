const catalogController  = require('../controllers/hotelController')
const authController = require('../controllers/authController')
const createController = require('../controllers/createController.js');
const detailsController = require('../controllers/bookController');
let express = require('express')
let cors = require('cors');
const tokenController = require('../controllers/tokenController');
const userController = require('../controllers/userController');
const personController = require('../controllers/personController');



module.exports = (app) => {
    app.use(express.json())
    app.use(cors())
    app.use('/profile',personController)
    app.use('/favorite',userController)
    app.use('/token',tokenController)
    app.use('/car', detailsController);

    app.use('/catalog', catalogController);
    app.use('/auth',authController)
app.use('/create',createController)


};