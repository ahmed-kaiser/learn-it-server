const express = require('express');
const app = express();
const cors = require('cors');
const port = 5001;

app.use(cors());
app.use(express.static('./images'));

const categories = require('./data/course_category.json');
const data = require('./data/course_data.json');

app.get('/courses', (req, res) => {
    res.send(data);
});

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/course/:id', (req, res) => {
    res.send(data.find(item => item.id === req.params.id));
})

app.get('/category/:id/courses', (req, res) => {
    const id = req.params.id;
    res.send(data.filter(item => item.category_id === id));
})

app.listen(port);