const authRoutes = require('./authRoutes');

function setRoutes(app) {
    authRoutes(app);
}

module.exports = setRoutes;