const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send();
});
// eslint-disable-next-line no-console
console.log('rondando');
app.listen(3001);
