const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send();
});

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'Jose Joao',
            email: 'jj@email.com',
        },
    ];
    res.status(200).json(users);
});

module.exports = app;
