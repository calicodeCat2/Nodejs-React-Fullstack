const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'douche canoe'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);