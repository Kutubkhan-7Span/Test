const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const setRoutes = require('./routes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
setRoutes(app);

// Database sync and server start
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.sync();
    console.log('Database synced successfully');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
}

startServer();

module.exports = app;