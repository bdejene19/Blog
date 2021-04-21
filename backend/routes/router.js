const express = require('express');
const { mongo } = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/createUser', (req, res) => {
    let response = req.body;

    User.find({username: response.username},  async (user, err) => {
        if (user) {
            res.send('sorry that user already exists')
        }

        if (!user) {
            if (response.pswd === response.repeatPass) {
                let hashedPassword = await bcrypt.hash(response.password, 10);
                const addedUser = new User ({
                    firstName: response.firstName,
                    lastName: response.lastName,
                    username: response.username,
                    password: hashedPassword,
                });

                
                addedUser.save((error, user) => {
                    if (user) {
                        console.log('user was added to the db');
                    } else {
                        console.log('there was an error added your user to the database');

                    }
                })
                

            }
           
        }

    })

})


module.exports = router;