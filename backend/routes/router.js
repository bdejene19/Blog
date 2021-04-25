const express = require('express');
const { mongo } = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const LinkedListNode = require('../datastrucutres/LinkedListNode');
const LinkedList = require('../datastrucutres/LinkedList');
console.log(new LinkedList());
console.log(new LinkedListNode);


const router = express.Router();
let newestUser = new User();
router.post('/createUser', (req, res) => {
    let response = req.body;

    User.find({userName: response.username},  async (user, err) => {
        if (user) {
            res.send('sorry that user already exists')
        }

        if (!user) {
            if (response.pswd === response.repeatPass) {
                const hashedPassword = await bcrypt.hash(response.password, 10);
                const addedUser = new User ({
                    firstName: response.firstName,
                    lastName: response.lastName,
                    userName: response.username,
                    password: hashedPassword,
                });

                console.log(addedUser);

                addedUser.save((error, user) => {
                    if (user) {
                        console.log('user was added to the db');
                    } 
                    if (error) {
                        console.log(error);
                    }
                })

                newestUser = addedUser;
                return newestUser;
            }          
        }
    })
})

router.post('/newPost', (req, res) => {

})


router.get('/name', (req, res) => {
    try {
        res.status(200).send(newestUser);
    } catch {
        console.log('there was an error')
    }
})



module.exports = router;