const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


exports.signup = (req, res, next) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (regexEmail.test(req.body.email)) {
        if (regexPassword.test(req.body.password)) {
            bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = new User({
                    "email": req.body.email,
                    "password": hash
                });
                user.save()
                    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                    .catch(error => res.status(400).json({ error }));
            })
            .catch(error => res.status(500).json({ error }));
        } else {
            res.writeHead(400, 'Le mot de passe doit contenir minimum 8 caractères avec au moins une lettre et un nombre', {
                'content-type': 'applicaiton/json',
            });
            res.end('Mot de passe invalide.');
            throw new Error("Mot de passe invalide.")
        }
           
    } else {
        res.writeHead(400, '{"message": "Veuillez utiliser une adresse mail valide !"}', {
            'content-type': 'application/json',
        });
        res.end('Email invalide.');
        throw new Error("Email invalide.")
    }
}


exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};