// setting up a route
const express = require('express');
const expressRouter = express.Router();

// .get method that will handle incoming get requests
expressRouter.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'diaries were fetched'
    });
});


// .get method that will handle incoming get requests
expressRouter.post('/', (req, res, next) => {

    const newDiary = {
        diaryUserId: req.body.userId,
        diaryTitle: req.body.diaryTitle,
        diaryDescription: req.body.diaryDescription
    };

    res.status(201).json({
        message: 'diary created',
        createdDiary: newDiary

    });
});

// .get method that will handle incoming get requests
expressRouter.get('/:diaryId', (req, res, next) => {
    res.status(200).json({
        message: 'diary detail',
        orderId: req.params.orderId
    });
});

// .delete method that will handle incoming delete requests
expressRouter.delete('/:diaryId', (req, res, next) => {
    res.status(200).json({
        message: 'diary deleted',
        orderId: req.params.orderId
    });
});

module.exports = expressRouter;