const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, 'public')));


app.post('/test', (req, res) => {
    console.log(req.body);
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));