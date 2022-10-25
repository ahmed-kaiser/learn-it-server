const express = require('express');
const app = express();
const port = 5001;

const data = require('./data/course_data.json');

app.get('/courses', (req, res) => {
    res.send(data);
});

app.get('/course/:id', (req, res) => {
    res.send(data.find(item => item.id === req.params.id));
})

app.listen(port);