// setting up a route
const express = require('express');
const callBcrypt = require('bcrypt');
const expressRouter = express.Router();


/* .get method that will handle incoming get requests
expressRouter.get('/', (req, res) => {
    res.status(200).json({
        message: 'handling Get request to /users'
    });
});*/


// calling the user model ------------------
//const userModels = require('../models/user');

// creation of the new user
expressRouter.post('/signup', (req, res, next) => {
    const newDiaryUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        // hashing and salting our password 
        password: callBcrypt.hash(req.body.password, 10)
          // 10 is the number of salting rounds
    };
        newDiaryUser.save().then(result => {
            res.status(201).json({
                message: 'user created'
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
        
});

/*info on one user

expressRouter.get('/:userId', (req, res) => {
    const id = req.params.userId;
    if (id == 'special') {
        res.status(200).json({
            message: 'u discovered an id',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'you passed an id'
        });

    }
});*/

// supporting patch request

expressRouter.patch('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'updated product'
    });
});

// supporting delete request 
expressRouter.delete('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'deleted product'
    });
});

module.exports = expressRouter;