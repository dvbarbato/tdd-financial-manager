const express = require('express');
const consign = require('consign');

const app = express();
// consign procurar do diretorio padrao src
consign({ cwd: 'src' })
    .include('./config/middlewares.js')
    .then('./routes')
    .then('./config/routes.js')
    .into(app);

app.get('/', (req, res) => {
    res.status(200).send();
});

module.exports = app;
