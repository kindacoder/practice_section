const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

///Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.render('index');
})
app.post('/submit', (req, res) => {
    console.log(req.body);
})


app.listen(3000, () => {
    console.log('Server started at port 3000');
})