const express = require('express'); // calling express

const app = express(); // executing express

const callMorgan = require('morgan');

const callBodyParser = require('body-parser');

const userRoutes = require('./server/routes/users');

const diaryRoutes = require('./server/routes/diaries');

// using morgan
app.use(callMorgan('dev'));

// using body parser
app.use(callBodyParser.urlencoded({ extended: false }));
app.use(callBodyParser.json());

// handling CORS ERRORS



// routes which shauld handle request
app.use('/auth', userRoutes);
app.use('/diaries', diaryRoutes);


// handling error for the requests

app.use((req, res, next) => {
    const requestErrors = new Error('Not found');
    requestErrors.status = 404;
    next(requestErrors);
});

app.use((requestErrors, req, res, next) => {
    res.status(requestErrors.status || 500);
    res.json({
        requestErrors: {
            message: requestErrors.message
        }
    });
});

module.exports = app;