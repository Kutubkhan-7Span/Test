const express = require('express');
const AuthController = require('../controllers/authController');

const router = express.Router();
const authController = new AuthController();

const setAuthRoutes = (app) => {
    router.post('/register', authController.register);
    router.post('/login', authController.login);
    
    app.use('/api/auth', router);
};

module.exports = setAuthRoutes;