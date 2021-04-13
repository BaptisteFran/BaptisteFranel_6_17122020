const express = require('express');
const mongoose = require('mongoose');
const saucesRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');
const path = require('path');
const cors = require('cors');
const helmet = require("helmet");

MY_APP_SECRET = process.env.APP_SECRET;


mongoose.connect(MY_APP_SECRET,
    {

        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongDB échouée !'));

const app = express();

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
})

app.use(helmet());
app.disable("x-powered-by");
app.use(express.json());

app.use('/images', cors(corsOptions), express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', cors(corsOptions), saucesRoutes);
app.use('/api/auth', cors(corsOptions), userRoutes);


module.exports = app;